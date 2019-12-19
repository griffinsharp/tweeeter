## Introduction

Twitter-like app created while exploring more into MongoDB, ExpressJS, React/Redux, and NodeJS (MERN) during my time at App Academy. Basic app where users are able to login or create an account, view all tweets on the app, view their own tweets, and create tweets.

The purpose of this project was to learn functionality and how the different parts of the MERN stack interact together to create a full web app in a pure `JavaScript` environment, rather than focusing on styling/UX/UI. 

## Features

**Tweet Feed**

Users can view all the tweets being sent out on the app. Create a tweet and navigate back to the home page to see your tweet now available to be seen by all other users.

**User Authentication**

User authentication for this app utilizes BCrypt to safely hash, salt, and store passwords. Instead of tracking sessions, `Node.js` has the `passport-jwt` module which allows instead for secure, token based authentication via JSON webtokens. With every request sent by `Express`, `passport-jwt` acts as middleware that ensures the proper authorization header is included and can be trusted.

**User Tweets** 

A user is able to both create tweets and view only the tweets they have created. This is the early stages of a tweet creation and profile page. This is done by making `axios` GET and POST requests to `/api/tweets/user/${id}` and `/api/tweets` respectively and updating the redux state accordingly via reducers. Components then render the appropriate state based on props. 

## Code Snippets





## Technologies Used

- `React` 
- `Redux` 
- `Express.js` 
- `Node.js` 
- `MongoDB` 
