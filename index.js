//you sent a request and get a rsponse //request is a message sent from a client to a server
//response is a message sent from a server to a client 
// used to communicate between the client and the server //used to send and receive data
//WHAT IS CRUD?????????????????????? //CREATE READ UPDATE DELETE 
//CRUD means create read update delete


//USING EXPRESS --- A FRAMEWORK FOR NODE JS  
// WEB FRAMEWORK FOR NODE JS -- HELPS TO CREATE DIFFERENT ROUTES FOR OUR API

//THEN WILL USE POSTMAN TO MAKE REQUESTS TO OUR APIS
//POSTMAN IS A TOOL TO MAKE REQUESTS TO OUR APIS
import express from "express";
import bodyParser from "body-parser"; //to take data from the body of the request
import usersRoutes from "./routes/users.js"

//i will be handling db users will make five different routes

/************************************************************************
GET /users--find all users
POST /users--create a new user
PUT /users/:id--update a user
GET /users/:id--find a single user
DELETE /users/:id--DELETE A USER
PATCH /users/:id--UPDATE A USER
********************************************************/
const app = express();
const PORT = 5000;
app.use(bodyParser.json()); //USING BODY PARSER TO TAKE DATA FROM THE BODY OF THE REQUEST
//node and express are used to create a server and are about routing

app.use("/users", usersRoutes); //USING USERS ROUTES


app.get("/", (req, res) => res.send("Hello from homepage"));

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));


