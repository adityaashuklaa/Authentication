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