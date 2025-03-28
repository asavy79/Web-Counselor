import OpenAI from "openai";


const deepseekKey = process.env.DEEPSEEK_API_KEY;

const openai = new OpenAI({
    apiKey: deepseekKey,
    baseURL: 'https://api.deepseek.com',
});


interface User {
    name: string;
    major: string;
    degree: string;
    courseHistory: string[];
    question: string;
}

export const generateCourseRecommendations = async (user: User) => {
    const response = await openai.chat.completions.create({
        model: "deepseek-chat",
        messages: [
            {
                role: "user",
                content: `Context:
                - Name: ${user.name}
                - Major: ${user.major}
                - Degree: ${user.degree}
                - Completed Courses: ${user.courseHistory.join(', ')}

                User Question: ${user.question}

                Please provide a helpful response based on the user's academic context and their specific question.`
            }
        ],
    });

    return response.choices[0].message.content;
};



