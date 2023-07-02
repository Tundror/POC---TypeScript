import { FilmStructure } from "../protocols/index";
import * as filmsRepository from "../repositories/films.repositories"


export async function addFilm(film: FilmStructure) {
    return await filmsRepository.addFilm(film)
}

export async function getFilms(){
    const result = await filmsRepository.getFilms()
    return result.rows
}