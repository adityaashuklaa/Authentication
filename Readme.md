# Authentication
- bcrypt is the library used for hashing

## Authentication using Cookies  

- Cookies in webdev are small pieces of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing.
- There are two way browser stores data. 
JWTs are being stored in the localstorage of the broswer, while cookies are being stored in the cookies of the browser.

## Why cookies are useful: 
- Session Management   
- Personalization 
- Tracking
- Security
  
## Why not local storage?
- Cause we can't do this in next.js application.
- Servers gives back a set-cookie attribute, which is being stored by the browser and is being subsequently sent in every request to the server. 

## Types of cookies
- Persistent - Stay even if you close the window
- Session - Go away after the window closes
- Secure - Sent only over secure, encrypted connections (HTTPS)

## Properties of Cookies
- HttpOnly - Can not be accessed by client side scripts
- SameSite - Ensures cookies are not send on cross origin requests.
    1. Strict 
    2. Lax - Only Get request and on top level navigation
- Top Level Navigation - A different website pointed towards your website.
    3. None (CSRFs attacks will happen)
- By default Lax is get selected.
- In next.js website cookies can be sent from both ends, frontend as well as backend.  

## CSRF(Cross Site Requesr Forgery) Attacks
- Basically a different site forging to update the details of the users, by sending post requests.
- That's why you have to be very strict while sending cookies.
- Restrict Domains
- SameSite (This was introduced because of CSRFs)

## NextAuth
- The very first request sends the cookies in the header. 
- To handle all the routes being handled by a auth route handler, this is the syntax used. 
api/auth/[...authRoutes] or api/auth/[...nextauth]
- NextAuth gives you Auth Providers.

## Providers
- OAuth - [Login with Google, facebook, github]
- Email - [Login through email] after clicking the link being provided to the gmail account. 
- Crendentials - Do whatever you want. 

import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextRequest, arg: any){
    console.log(arg.params.authRoutes);
    
    return NextResponse .json({
        message: "Aditya is here."
    })
}
export function POST(){
    return NextResponse .json({
        message: "Aditya is POSTing here."
    })
}

- NextAuth is a session management library, given the details of the user it create cookies for you. That's why NextAuth never gives you signup page, let's you do that.
- It only create cookies and JWTs and send them to the browser.

providers: [
    CredentialsProvider({
        name: "Email",
        credentials: {
            username: {label: 'email', type: 'text', placeholder: 'Enter your email.'},
            password: {label: 'password', type: 'password', placeholder: 'Enter your password.'},
        },
        async authorize(credentials:any){
            const username = credentials.username;
            const password = credentials.password;
            const user = prisma.user.findOne({
                where: {
                    email: username,
                    password: password
                }
            })
            if(!user){
                return null;
            }
            return {
                id: user.id,
                email: user.email
            }
        }
    })
]

- Result : {
  csrfToken: 'e6becab99e7bbc4e3cea73b6f5f50f8281b4a6cc7339028a6034179d36543a7e',
  username: 'aditya@gmail.com',
  password: '12345678'
}