
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async session({ session, token }) {
            session.user.id = token.sub as string;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async signIn({user, email, credentials}) {
            console.log("User: ", user);
            const response = await fetch("http://fastapi:8000/student", {
                method: "POST",
                body: JSON.stringify({email: user.email, student_name: user.name}),
                headers: {"Content-Type": "application/json"}
            })
            if(!response.ok){
                console.log('issue finding or creating user');
                return true;
            }
            const data = await response.json();
            console.log("Data: ", data);
            return true;
        }
    },
})