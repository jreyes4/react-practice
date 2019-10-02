## Overview

The purpose of the project is to build upon my knowledge of react-redux and to learn how to use middleware with react-redux to make asynchronous action creators. 

In this project, I use axios to make calls to the jsonplaceholder api to fill my react page with dummy data for a blog posts site. I make two separate API calls through 2 async action calls that on loading the page. The API calls render a list of blog posts and a user's name. Both actions have reducers that are used with 'connect' on class-based componenets. 

Actions: 
    
    fetchPostsAndUsers - Is an action that calls other actions. Centralizes the actions of fetchPosts and fetchUsers to reduce amount of API calls and centralize the code. Updates the state so the app only includes distinct userIds and calls the API for only those distinct values (avoiding repeats).

    fetchPosts - Calls the json place holder api to simulate a list of blog posts. This is an async action that routes through redux-thunk.

    fetchUser - Calls the json place holder api to get a specified user by their id. This is an async action that routes through redux-thunk.

    API:
    https://jsonplaceholder.typicode.com


Reducers: 

    postsReducer - Returns a list of blog posts received by the fetchPosts API action call.

    usersReducer - Returns the user from the API Action call and saves it to an array.

### Credit

This project is based on the Stephen Grider's Udemy course on react

https://www.udemy.com/course/react-redux/

### Run Locally

To run locally, pull the project and from the project directory run the following command:

npm run start

The command should open a tab in your browser that takes you directly to the project. If you have any problems, try going to localhost:3000 in your browser.