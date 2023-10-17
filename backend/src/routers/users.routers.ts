import { Router } from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";
import schemas from "../schemas";

const users: Router = Router();

users.post(
    "/register",
    middlewares.validateSchema(schemas.users.userRequestSchema),
    middlewares.existsUserInfos,
    middlewares.existsAddress,
    controllers.users.create
);

users.post(
    "/login",
    middlewares.validateSchema(schemas.users.LoginSchema),
    controllers.users.login
);

users.patch(
    "/update/:id",
    middlewares.ensureAuth,
    middlewares.validateSchema(schemas.users.userUdpateSchema),
    middlewares.existsUserInfos,
    controllers.users.updateUser
);

users.delete(
    "/delete/:id",
    middlewares.ensureAuth,
    controllers.users.deleteUser
);

export default users;