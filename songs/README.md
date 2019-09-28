## Overview

The purpose of the project is to learn how to use react-redux. I've made a pseudo music library that handles state updating using redux via the use of the following actions and reducers:

Actions: 
    Select Song - Handles when a song is selected (clicked on) by the user and updates the state of the selected song.

Reducers: 
    The Song List - Stores a static list of the songs I've hard-coded into the project. This is overkill to have as a reducer, but I'm doing it as part of the learning exercise.
    
    The Selected Song - Handles updating the selected song 

The SongList class component maps the songs I've hard coded into the song list reducer into a reducer that is rendered when the page is loaded. Clicking on the select button for a song will trigger the action Select Song which will update the state of the selectedSong causing the entire page to re-render with the details of the selected song on the right hand side of the page.  

### Credit

This project is based on the Stephen Grider's Udemy course on react

https://www.udemy.com/course/react-redux/

### Run Locally

To run locally, pull the project and from the project directory run the following command:

npm run start

The command should open a tab in your browser that takes you directly to the project. If you have any problems, try going to localhost:3000 in your browser.