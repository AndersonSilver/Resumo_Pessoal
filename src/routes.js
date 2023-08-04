import { Router } from "express";

const app = new Router();

import SessionController from "./Controllers/SessionController";

app.get("/", SessionController.inicial);

export default app;
