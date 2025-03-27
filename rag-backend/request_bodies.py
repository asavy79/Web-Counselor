from pydantic import BaseModel


class Student(BaseModel):
    student_name: str
    email: str


class StudentCourse(BaseModel):
    course_code: str
    email: str
    grade: str


class Course(BaseModel):
    course_code: str
    course_description: str
    course_title: str


class QueryRequest(BaseModel):
    question: str
    email: str
