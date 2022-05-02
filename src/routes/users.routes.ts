import { Router } from "express";
import CreateUserController from "../modules/account/useCases/createUser/CreateUserController";
import UpdateUserAvatarController from "../modules/account/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();
const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch("/avatar", updateUserAvatarController.handle);

export default usersRoutes;
