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
    3. None (CSRFs attacks will happen)
- By default Lax is get selected.

## CSRF(Cross Site Requesr Forgery) Attacks
- Basically a different site forging to update the details of the users, by sending post requests.
- That's why you have to be very strict while sending cookies.
- Restrict Domains
- SameSite (This was introduced because of CSRFs)
