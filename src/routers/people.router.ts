import { Router } from "express";
import peopleController from "../controllers/people.controller";
import { validateSchema } from "../middlewares/validateSchema";
import { peopleSchema } from "../schemas/people.schema";

const peopleRouter = Router();

peopleRouter.get("/person", peopleController.getPeople);
peopleRouter.post("/person", validateSchema(peopleSchema), peopleController.createPeople); // TODO: validação via Joi

export default peopleRouter;