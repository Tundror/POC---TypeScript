import { Router } from "express";
import * as filmController from "../controllers/films.controllers"
import { validateSchema } from "../middlewares/validateSchema.middleware";
import { filmSchema } from "../schemas/films.schemas";


const filmRouter = Router()

filmRouter.get("/films", filmController.getFilms)
filmRouter.post("/films", validateSchema(filmSchema), filmController.addFilm)
filmRouter.put("/films/:id", validateSchema(filmSchema), filmController.updateFilm);
filmRouter.delete("/films/:id", filmController.deleteFilm);

export default filmRouter