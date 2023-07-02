import { Request, Response } from "express";
import { FilmStructure } from "../protocols/index";
import * as filmService from "../services/films.services"
import httpStatus from "http-status";

export async function getFilms(req: Request, res: Response) {
    try {
        const films = await filmService.getFilms()
        res.status(httpStatus.OK).send(films)
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

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

export async function updateFilm(req: Request, res: Response) {
    try {
        const id: number = Number(req.params.id);
        const film: FilmStructure = req.body;

        const existingFilm = await filmService.getFilmById(id);
        if (!existingFilm) {
            return res.status(httpStatus.NOT_FOUND).json({ error: "Registro não encontrado" });
        }

        await filmService.updateFilm(id, film);

        res.sendStatus(httpStatus.OK);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

export async function deleteFilm(req: Request, res: Response) {
    try {
        const id: number = Number(req.params.id);

        const existingFilm = await filmService.getFilmById(id);
        if (!existingFilm) {
            return res.status(httpStatus.NOT_FOUND).json({ error: "Registro não encontrado" });
        }
        
        await filmService.deleteFilm(id);

        res.sendStatus(httpStatus.OK);
    } catch (err) {
        res.status(500).json(err.message);
    }
}