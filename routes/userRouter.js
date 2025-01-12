const { Router } = require("express");
const userController = require("../controllers/userController.js");
const userRouter = Router();

userRouter.get("/new", userController.createUsernameGet);
userRouter.post("/new", userController.createUsernamePost);




userRouter.get("/", userController.getUsernames);


module.exports = userRouter;
