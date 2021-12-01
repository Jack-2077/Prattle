
# Welcome to Prattle!

A brief description of what this project does and who it's for

# What is Prattle?
Prattle is an instant messaging application.

# How to install and run the application:
## GitHub:
Clone the repository to your desired location by copying and pasting this code block:
```
git clone https://github.com/Cezaraus/CPSC2600-Project.git
```
## Client-Side:
To run the client side of the application. Open the repository in VSCode then open a terminal window in the location of the cloned repository. Run the client side application by running this npm script:
```
npm start
```
The website should automatically open your default browswer in localhost:3000
## Server-Side:
To run the server side of the application. Open the repository in VSCode then open a terminal window in the location of the cloned repository. Run the client side application by running this npm script:
```
npm run dev
```
The server should automatically run in the background on localhost:4000
# Components and Pages
Prattle uses several components to render the page such as the chatbox, textinput, and navbar. All of these components make up the Prattle application.
## Appbar.js
The Appbar component displays the top header to show where the user is currently at on the site.
## Articles.js
The Articles component displays current news around the world using an API from [NewsAPI](https://newsapi.org/).
The grid design was inspired from Amet Çadirci's [Article Grid Page](https://codepen.io/ahmetcadirci25/pen/OJjXGGy).
## Chatbox.js
The Chatbox component displays the messages that are sent from users. It is extracted from the database.
## Navbar.js
The Navbar component displays the left navigation panel. This allows users to switch between the General chat, Articles page, and About page.
## Textinput.js
The Textinput component allows users to send messages to the general chat. This information is sent to the database.

**State example:**
The Textinput component uses a useState hook to keep track of what the user is typing before they send the message to the database.
## SignIn.js
The SignIn page is to render the login page to allow users to send their own unique messages.
## SignUp.js
The SignUp page is to render the sign up page to allows users to create an account.

**Prop example:**
The Textinput component gets passed a prop and updates it to the parent component. This prop is used to manage whether or not a user has been found and is logged in.

# Event Handlers
Our application has adding and deleting features. We can add users by having them sign up through the sign up page. Users can also send messages to share with others, this is added to the database. If a user would like to delete a message they can do so by clicking the trash can icon beside the message.

# Client-Side Routing
Prattle makes use of CSR by route switching and redirecting between the Home, About, Sign in, Sign up, and Article pages.

# REST API
The application uses HTTP requests to send and recieve data from the database as well as other sources.
## Getting Messages
User's messages are grabbed using a get request from the server and database. This is displayed on the right chatbox area to show all the messages.
## Getting Users
User's accounts are grabbed using a get request from the server and database. This is displayed on the left navbar to show all users.
## Getting Articles
The Article page uses a get request from the [NewsAPI](https://newsapi.org/) API to display different current articles around the world.
## Posting Messages
Messages are sent to the database using a post request then displayed on the chatbox area.

# MongoDB
Prattle's database runs on MongoDB with two collections.
## users collection
The users collection contains all the user account information such as the user's first name, last name, email, and password.
## messages collection
The messages collection contains all messages sent from users with the message and email property.