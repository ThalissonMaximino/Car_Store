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


export default users;