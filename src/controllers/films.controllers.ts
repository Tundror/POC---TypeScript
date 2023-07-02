import { Request, Response } from "express";
import { FilmStructure } from "../protocols/index";
import * as filmService from "../services/films.services"
import httpStatus from "http-status";


export async function addFilm(req: Request, res: Response) {
    try {
        const film = req.body as FilmStructure

        filmService.addFilm(film)
        res.sendStatus(httpStatus.CREATED)
    }
    catch (err) {
        res.status(500).json(err.message);
    }

}

export async function getFilms(req: Request, res: Response) {
    try {
        const films = await filmService.getFilms()
        console.log(films)
        res.status(httpStatus.OK).send(films)
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}