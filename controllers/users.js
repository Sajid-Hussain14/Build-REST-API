import { v4 as uuidv4 } from "uuid";


// Mock database
let users = [];
export const createUser = (req, res) => {
    const { firstName, lastName, age } = req.body;

    if (!firstName || !lastName || !age) {
        return res.status(400).send("Missing required fields: firstName, lastName, age.");
    }

    const newUser = { firstName, lastName, age, id: uuidv4() };
    users.push(newUser); // Add the user to the users array

    // Respond with the correct user's name after adding it
    res.send(`USER WITH THE NAME ${newUser.firstName} ADDED TO THE DATABASE`);
}

export const getAllUsers = (req, res) => {
    res.json(users); // Return the list of users
}
export const getUser = (req, res) => {
    const userId = req.params.id;  // Access the 'id' from the URL
    const foundUser = users.find((user) => user.id === userId);  // Find the user by id
    
    if (!foundUser) {
        return res.status(404).send(`User with id ${userId} not found`);
    }

    res.json(foundUser);  // Send back the user object found
}
export const deleteUser = (req, res) => {
    const userId = req.params.id;  // Access the 'id' from the URL
    
    // Find the index of the user with the given id
    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
        return res.status(404).send(`User with id ${userId} not found`);
    }

    // Remove the user from the array
    users.splice(userIndex, 1);

    // Respond with confirmation message
    res.send(`USER WITH THE ID ${userId} DELETED FROM THE DATABASE`);
}
export const updateUser = (req, res) => {
    const userId = req.params.id;  // Access the 'id' from the URL
    const { firstName, lastName, age } = req.body;  // Access the updated fields from the request body

    // Find the user with the given id
    const user = users.find((user) => user.id === userId);

    // if (!user) {
    //     return res.status(404).send(`User with id ${userId} not found`);
    // }

    // Update the user object with the new values    
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    // Respond with confirmation message
    res.send(`USER WITH THE ID ${userId} UPDATED IN THE DATABASE`);
}
