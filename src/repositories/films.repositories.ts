import { FilmStructure } from "../protocols/index";
import { db } from "../database/database";

export async function getFilms(){
    const result = await db.query(`SELECT name, genre, platform, watched FROM films`)
    return result;
}

export async function addFilm(film: FilmStructure){
    return await db.query(`INSERT INTO films (name, genre, platform, watched) VALUES ($1, $2, $3, $4)`, [film.name, film.genre, film.platform, film.watched])
}