import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException
from db import create_student, check_student, add_course, fetch_student_courses
from request_bodies import Student, StudentCourse, QueryRequest
from test_query import prompt_llm


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://nextjs:3000", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    print("Test worked!")
    return {"message": "Hello, World!"}


@app.post("/student")
async def add_student(student: Student):
    found_student = check_student(student.email)
    if found_student:
        return {"message": "Student already created!"}
    new_student = create_student(
        student_email=student.email, student_name=student.student_name)
    if not new_student:
        raise HTTPException(
            status_code=400,
            detail="Student could not be created"
        )
    else:
        return {"message": "student created!", "student": student}

@app.get("/courses")
async def get_student_courses(email: str):
    courses = fetch_student_courses(email)
    return {"courses": courses}

@app.post("/courses")
async def add_student_course(course: StudentCourse):
    course_result = add_course(course.email, course.course_code, course.grade)
    if course_result:
        return {"message": "Course added successfully", "course": course}
    else:
        return {"message": "Course not added"}



@app.post("/query")
async def query_llm(data: QueryRequest):
    courses = fetch_student_courses(data.email)
    courses_string = ""
    for course in courses:
        courses_string += f"Course Code: {course['course_code']}, Course Name: {course['course_title']}\n"
    response = prompt_llm(data.question, courses_string)
    return {"response": response}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
