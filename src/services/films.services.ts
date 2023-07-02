import { FilmStructure } from "../protocols/index";
import * as filmsRepository from "../repositories/films.repositories"


export async function addFilm(film: FilmStructure) {
    return await filmsRepository.addFilm(film)
}

export async function getFilms(){
    const result = await filmsRepository.getFilms()
    return result.rows
}

export async function updateFilm(id: number, film: FilmStructure) {
    await filmsRepository.updateFilm(id, film);
}
export async function deleteFilm(id: number){
    return await filmsRepository.deleteFilm(id)
}

export async function getFilmById(id: number) {
    return await filmsRepository.getFilmById(id);
}