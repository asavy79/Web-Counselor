import { NextResponse } from "next/server";
import { courses, myTakenCourses } from "@/lib/cs-courses";


const getPrerequisites = (desiredCourses: string[], takenCourses: string[]) => {


    const taken = new Set(takenCourses);
    let sequence: string[] = [];

    const helper = (courseCode: string) => {
        const course = courses[courseCode];
        for (const prereq of course.prerequisites) {
            if (!taken.has(prereq)) {
                helper(prereq)
            }
        }
        taken.add(courseCode);
        sequence.push(courseCode);
    }

    for (const course of desiredCourses) {
        if (!taken.has(course)) {
            helper(course);
        }
    }

    return sequence;
}



export async function POST(request: Request) {

    const data = await request.json();

    const { desiredCourses, takenCourses } = data;
    const prereqs = getPrerequisites(desiredCourses, takenCourses);

    console.log(prereqs);

    const courseSequence = prereqs.map(course => {
        const courseInfo = courses[course];
        return {
            courseCode: course,
            description: courseInfo.description,
            prereqs: courseInfo.prerequisites
        }
    })

    console.log("courseInfo: ", courseSequence);

    return NextResponse.json(courseSequence);
}
