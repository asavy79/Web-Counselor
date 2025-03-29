import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export async function POST(request: NextRequest) {
    const data = await request.json();
    const { courseId } = data;

    const session = await auth();
    const email = session?.user?.email;

    if (!email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const response = await fetch("http://fastapi:8000/courses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, course_code: courseId, grade: "100" }),
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to add course" }, { status: 500 });
        }

        const data = await response.json();
        if (data.message == "Course not added") {
            return NextResponse.json({ message: "Course not added" }, { status: 200 });
        }

        return NextResponse.json({ message: "Course added successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error adding course:", error);
        return NextResponse.json({ error: "Error adding course" }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    const session = await auth();
    const email = session?.user?.email;

    if (!email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const response = await fetch(`http://fastapi:8000/courses?email=${email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to get student courses" }, { status: 500 });
        }

        const data = await response.json();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Error fetching student courses:", error);
        return NextResponse.json({ error: "Error fetching student courses" }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    const session = await auth();
    const email = session?.user?.email;
    const courseId = request.nextUrl.searchParams.get("courseId");
    if (!email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const response = await fetch(`http://fastapi:8000/courses`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, course_code: courseId }),
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to delete course" }, { status: 500 });
        }

        return NextResponse.json({ message: "Course deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting course:", error);
        return NextResponse.json({ error: "Error deleting course" }, { status: 500 });
    }
}