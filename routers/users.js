const { Router } = require('express');

const userController = require('../controllers/users.js');

const userRouter = Router();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.delete("/logout", userController.logout)

module.exports = userRouter;