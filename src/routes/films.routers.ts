import { Router } from "express";
import * as filmController from "../controllers/films.controllers"

const filmRouter = Router()

filmRouter.get("/films", filmController.getFilms)
filmRouter.post("/films", filmController.addFilm)

export default filmRouter