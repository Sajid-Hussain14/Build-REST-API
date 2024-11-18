// import express from "express";
// import {v4 as uuidv4} from "uuid";

// const router = express.Router();

// //creating mock database
// const users = [
//     // {
//     //     firstName: "Sajid",
//     //     lastName: "Hussain",
//     //     age: 22
//     // },
//     // {
//     //     firstName: "Akeel",
//     //     lastName: "Hussain",
//     //     age: 16
//     // }
// ]
// //all routes in here are starting with /users
// router.get("/", (req, res) => {
//     // console.log(users);
    
//     // res.send("users here hello");
//     res.json(users);
// });

// router.post("/", (req, res) => {
//     const user = req.body;

//     // const userId = uuidv4();
//     // const userWithId = {...user, id: userId};
//     // const userWithId = {...user, id: uuidv4()};

//     // user.id = userId;
//     users.push({...user, id: uuidv4()});
//     const addedUser = users[users.length - 1];
//     res.send(`USER WITH THE NAME ${addedUser.firstName} ADDED TO THE DATABASE`); 
    
// })
// export default router;

import express from "express";

import { createUser, getAllUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";


let router = express.Router();


// All routes start with /users
router.get("/", getAllUsers);

router.post("/", createUser);
//  /users/2 => req.params {id: 2}
// router.get("/:id", (req, res) => {
//    res.json('Get ID route');
// });
// GET /users/:id - Get a user by ID
router.get('/:id', getUser );

// DELETE /users/:id - Delete a user by ID
router.delete('/:id', deleteUser);
//change user details ussing patch and put means when we want to change the whole user object 
//we use put and when we want to update only one field we use patch
router.patch('/:id', updateUser);

export default router; 

