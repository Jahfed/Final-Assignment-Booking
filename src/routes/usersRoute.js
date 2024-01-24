import express from "express";

//middleware
import authMiddleware from "../middleware/auth0.js";
import notFoundErrorHandler from '../middleware/notFoundErrorHandler.js';

//services import
import getUsersById from "../services/users/getUsersById.js";
import getUsersByQuery from "../services/users/getUsersByQuery.js";
import createNewUser from "../services/users/postNewUser.js";
import updateUser from "../services/users/updateUser.js";
import deleteUser from "../services/users/deleteUser.js";

const router = new express.Router();

router.get('/', async (req, res) => {
    const { name, email, phoneNumber, profilePicture } = req.query;
    const user = await getUsersByQuery(name, email, phoneNumber, profilePicture);
    res.status(200).json(user);
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await getUsersById(id);
    res.status(200).json(user);
})

router.post('/', authMiddleware, async (req, res) => {
    const { username, password, name, email, phoneNumber, profilePicture } = req.body;
    const newUser = await createNewUser(username, password, name, email, phoneNumber, profilePicture);
    res.status(201).json(newUser);
})

router.put('/:id', authMiddleware, async (req, res, next) => {
    try {
        const { id } = req.params;
        const { username, password, name, email, phoneNumber, profilePicture } = req.body;
        const updatedUser = await updateUser(id, username, password, name, email, phoneNumber, profilePicture);
        res.status(201).json(updatedUser);
    } catch (error) {
        next(error);
    }
}, notFoundErrorHandler)

router.delete('/:id', authMiddleware, async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await deleteUser(id);
        res.status(201).json(deletedUser);
    } catch (error) {
        next(error);
    }
}, notFoundErrorHandler)




export default router;
