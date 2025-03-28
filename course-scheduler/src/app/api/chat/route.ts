import { NextRequest, NextResponse } from 'next/server';
import { generateCourseRecommendations } from '@/lib/chatgpt';
import { myTakenCourses, courses } from '@/lib/cs-courses';
import { auth } from '@/auth';

export async function POST(request: NextRequest) {

    const session = await auth();
    const { question } = await request.json();

    const email = session?.user?.email;
    try {
        const response = await fetch("http://fastapi:8000/query",
            {
                method: "POST",
                body: JSON.stringify({ question: question, email: email }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
        }

        const data = await response.json();
        return NextResponse.json({ response: data.response });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
    }
} 