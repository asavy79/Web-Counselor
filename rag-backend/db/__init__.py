from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sqlalchemy.exc import NoResultFound
from sqlalchemy.orm import DeclarativeBase, relationship, mapped_column
from sqlalchemy import String, ForeignKey
from uuid import uuid4


class Base(DeclarativeBase):
    pass


class Student(Base):

    __tablename__ = "student"

    email = mapped_column(String, primary_key=True, nullable=False)
    student_name = mapped_column(String)
    courses = relationship(
        "Course", secondary="student_courses", back_populates="students")


class Course(Base):
    __tablename__ = "course"

    course_code = mapped_column(String, primary_key=True, nullable=False)
    course_title = mapped_column(String)
    course_description = mapped_column(String)
    students = relationship(
        "Student", secondary="student_courses", back_populates="courses")


class StudentCourse(Base):
    __tablename__ = "student_courses"
    id = mapped_column(String, primary_key=True, default=lambda: str(uuid4()))
    email = mapped_column(ForeignKey("student.email"))
    course_code = mapped_column(ForeignKey("course.course_code"))
    grade = mapped_column(String, nullable=True)

    student = relationship("Student", backref="student_courses")
    course = relationship("Course", backref="student_courses")


DB_URL = "postgresql+psycopg2://postgres:yourpassword@postgresdb:5432/course-project"


engine = create_engine(DB_URL)


def fetch_student_courses(student_email):
    with Session(engine) as session:
        results = session.query(StudentCourse, Course.course_title)\
            .join(Course, StudentCourse.course_code == Course.course_code)\
            .filter(StudentCourse.email == student_email)\
            .all()
    formatted_results = []
    for student_course, title in results:
        formatted_results.append({
            "course_code": student_course.course_code,
            "grade": student_course.grade,
        "course_title": title,
    })
    return formatted_results



def create_student(student_email, student_name):
    with Session(engine) as session:
        try:
            new_student = Student(email=student_email,
                                  student_name=student_name)
            session.add(new_student)
            session.commit()
        except:
            print("Something went wrong!")
            return None


def check_student(student_email):
    with Session(engine) as session:
        try:
            found_student = session.query(
                Student).filter_by(email=student_email).one()
            return True
        except NoResultFound:
            return False


def add_course(student_email, course_code, grade):
    with Session(engine) as session:
        try:
            student = session.query(Student).filter_by(
                email=student_email).one()
            course = session.query(Course).filter_by(
                course_code=course_code).one()
        except NoResultFound:
            print("Student or course not found!")
            return None
        check_course = session.query(StudentCourse).filter_by(  
            email=student_email, course_code=course_code).one_or_none()
        if check_course:
            print("Course already exists!")
            return None
        student_course = StudentCourse(
            email=student_email, course_code=course_code, grade=grade)
        session.add(student_course)
        session.commit()
        return student_course
