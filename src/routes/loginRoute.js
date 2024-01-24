import { Router } from "express";
import login from "../services/login/login.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";

const router = Router();

router.post("/", async (req, res, next) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            res.status(401).json({ message: "Invalid credentials! Make sure you send the username and password" });
        }

        const token = await login(username, password);

        if (!token) {
            res.status(401).json({ message: "Invalid credentials!" });
        } else {
            res.status(200).json({ message: "Successfully logged in!", token });
        }
    } catch (error) {
        next(error);
    }
});

export default router;