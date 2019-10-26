# Overview

Twitch Clone project

** Actions: **

    signIn - Handles user signing into site using Google's oAuth. Passes the Google associated userId as a parameter to the reducer. 
    
    signOut - Handles user signing out of site using Google's oAuth. 

    createStream - Will be used to store a new stream to the api server instance.

** Reducers: **
    authReducer - Handles signing in and out for Google's oAuth. When signing in, updates the isSignedIn property to true when succesful and saves the userId as a property. When signing out, sets the property userId to null.

** Pages: **
    /streams/new - The stream create component contains a form that uses redux-form for creating new stream pages. 




