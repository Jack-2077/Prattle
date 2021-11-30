import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import './About.css';

function About(){
    return(
        <div>
            <Box alignContent='center' width='50%' margin='auto'>
                <Typography variant='h2' color='primary' align='center' fontWeight='bold'>
                    Welcome to Prattle!
                </Typography>
                {/* ------------------------------------------WHAT IS PRATTLE CARD-------------------------------------------*/}
                <Box className="subheading card-bg">
                    What is Prattle?
                    <Box className="regular-text">
                    Prattle is an instant messaging application.
                    </Box>
                </Box>


                {/* ------------------------------------------INSTALLATION AND BUILD CARD-------------------------------------------*/}
                <Box className="subheading card-bg">
                    How to install and run the application:
                    <Box className="sub-subheading" color='secondary'>
                        GitHub:
                        <Box className="regular-text" color='black'>
                            Clone the repository to your desired location by copying and pasting this code block:
                            <Box className="code-block">
                                git clone https://github.com/Cezaraus/CPSC2600-Project.git
                            </Box>
                        </Box>
                    </Box>
                    <Box className="sub-subheading" color='secondary'>
                        Client-Side:
                        <Box className="regular-text" color='black'>
                            To run the client side of the application. 
                            Open the repository in VSCode then open a terminal window in the location of the cloned repository.
                            Run the client side application by running this npm script:
                            <Box className="code-block">
                                npm start
                            </Box>
                            The website should automatically open your default browswer in localhost:3000
                        </Box>
                    </Box>
                    <Box className="sub-subheading" color='secondary'>
                        Server-Side:
                        <Box className="regular-text" color='black'>
                            To run the server side of the application. 
                            Open the repository in VSCode then open a terminal window in the location of the cloned repository.
                            Run the client side application by running this npm script:
                            <Box className="code-block">
                                npm run dev
                            </Box>
                            The server should automatically run in the background on localhost:4000
                        </Box>
                    </Box>
                </Box>
                {/* ------------------------------------------END OF INSTALLATION AND BUILD CARD-------------------------------------------*/}

                {/* ------------------------------------------COMPONENTS AND PAGES CARD-------------------------------------------*/}
                <Box className="subheading card-bg">
                    Components and Pages
                    <Box className="regular-text">
                        Prattle uses several components to render the page such as the chatbox, textinput, and navbar.
                        All of these components make up the Prattle application.
                        <Box className='sub-subheading'>
                            Appbar.js
                            <Box className="regular-text">
                                The Appbar component displays the top header to show where the user is currently at on the site.
                            </Box>
                        </Box>
                        <Box className='sub-subheading'>
                            Articles.js
                            <Box className="regular-text">
                                The Articles component displays current news around the world using an API from
                                <a href="https://newsapi.org/"> NewsAPI</a>.
                                The grid design was inspired from Amet Çadirci's <a href="https://codepen.io/ahmetcadirci25/pen/OJjXGGy">Article Grid Page</a>.
                            
                            </Box>
                        </Box>
                        <Box className='sub-subheading'>
                            Chatbox.js
                            <Box className="regular-text">
                                The Chatbox component displays the messages that are sent from users. It is extracted from the database.
                            </Box>
                        </Box>
                        <Box className='sub-subheading'>
                            Navbar.js
                            <Box className="regular-text">
                                The Navbar component displays the left navigation panel. This allows users to switch between the General chat, Articles page, and About page.
                            </Box>
                        </Box>
                        <Box className='sub-subheading'>
                            Textinput.js
                            <Box className="regular-text">
                                The Textinput component allows users to send messages to the general chat. This information is sent to the database.
                            </Box>
                            <Box className="regular-text">
                                <Typography color='secondary'>State example:</Typography> 
                                The Textinput component uses a useState hook to keep track of what the user is typing before they send the message to the database.
                            </Box>
                        </Box>
                        <Box className='sub-subheading'>
                            SignIn.js
                            <Box className="regular-text">
                                The SignIn page is to render the login page to allow users to send their own unique messages.
                            </Box>
                        </Box>
                        <Box className='sub-subheading'>
                            SignUp.js
                            <Box className="regular-text">
                                The SignUp page is to render the sign up page to allows users to create an account.
                            </Box>
                            <Box className="regular-text">
                                <Typography color='secondary'>Prop example:</Typography> 
                                    The Textinput component gets passed a prop and updates it to the parent component. This prop is used to manage whether or not a user has been found and is logged in.
                            </Box>
                        </Box>
                    </Box>    
                </Box>    
                {/* ------------------------------------------END OF COMPONENTS AND PAGES CARD-------------------------------------------*/}


                {/* ------------------------------------------EVENT HANDLERS CARD-------------------------------------------*/}
                <Box className="subheading card-bg">
                    Event Handlers
                    <Box className="regular-text">
                        Our application has adding and deleting features. We can add users by having them sign up through the sign up page.
                        Users can also send messages to share with others, this is added to the database. If a user would like to delete a message they can do so by clicking the 
                        trash can icon beside the message.
                    </Box>
                </Box>
                {/* ---------------------------------------END OF EVENT HANDLERS CARD-------------------------------------------*/}

                {/* ------------------------------------------CSR-------------------------------------------*/}
                <Box className="subheading card-bg">
                    Client-Side Routing
                    <Box className="regular-text">
                        Prattle makes use of CSR by route switching and redirecting between the Home, About, Sign in, Sign up, and Article pages.
                    </Box>
                </Box>
                {/* ---------------------------------------END OF CSR-------------------------------------------*/}

                {/* ------------------------------------------REST-------------------------------------------*/}
                <Box className="subheading card-bg">
                    REST API
                    <Box className="regular-text">
                        The application uses HTTP requests to send and recieve data from the database as well as other sources.
                        <Box className="sub-subheading">
                            Getting Messages
                        </Box>
                        <Box className="regular-text">
                            User's messages are grabbed using a get request from the server and database. This is displayed on the right chatbox area to show all the messages.
                        </Box>
                        <Box className="sub-subheading">
                            Getting Users
                        </Box>
                        <Box className="regular-text">
                            User's accounts are grabbed using a get request from the server and database. This is displayed on the left navbar to show all users.
                        </Box>
                        <Box className="sub-subheading">
                            Getting Articles
                        </Box>
                        <Box className="regular-text">
                            The Article page uses a get request from the <a href="https://newsapi.org/"> NewsAPI</a> API to display different current articles around the world.  
                        </Box>
                        <Box className="sub-subheading">
                            Posting Messages
                        </Box>
                        <Box className="regular-text">
                            Messages are sent to the database using a post request then displayed on the chatbox area.
                        </Box>
                    </Box>
                </Box>
                {/* ---------------------------------------END REST-------------------------------------------*/}
            
                {/* ------------------------------------------MONGO-------------------------------------------*/}
                <Box className="subheading card-bg">
                    MongoDB
                    <Box className="regular-text">
                        Prattle's database runs on MongoDB with two collections.
                        <Box className="sub-subheading">
                            users collection
                        </Box>
                        <Box className="regular-text">
                            The users collection contains all the user account information such as the user's first name, last name, email, and password.
                        </Box>
                        <Box className="sub-subheading">
                            messages collection
                        </Box>
                        <Box className="regular-text">
                            The messages collection contains all messages sent from users with the message and email property.
                        </Box>
                    </Box>
                </Box>
                {/* ---------------------------------------END MONGO-------------------------------------------*/}            
            
            </Box>
        </div>
    );
}

export default About;
