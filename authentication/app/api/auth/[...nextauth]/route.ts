import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
const handler = NextAuth({
    providers: [
        CredentialsProvider({   
            name: "Email",  
            credentials: {
                username: {label: 'email', type: 'text', placeholder: 'Enter your email.'},
                password: {label: 'password', type: 'password', placeholder: 'Enter your password.'},
            },
            async authorize(credentials:any){   
                // Validation Logic
                console.log(credentials);   
                return {
                    id: "user1",
                    name: "Aditya Shukla",
                    email: "aditya@gmail.com"
                }
            }
        })
    ],
    // secret: "process.env.NEXTAUTH_SECRET"  Never hardcode it like this, not a good approach.
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }