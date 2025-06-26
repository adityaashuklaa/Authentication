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

                return {
                    id: "user1"
                }
            }
        })
    ]
})

export { handler as GET, handler as POST }