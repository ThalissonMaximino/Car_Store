import express, { json } from "express";
import "express-async-errors"
import "reflect-metadata"
import routes from "./routers";
import middlewares from "./middlewares";


const app = express()
app.use(json());
app.use(express.json())

app.use("/users", routes.users);

app.use(middlewares.handleError);

export default app