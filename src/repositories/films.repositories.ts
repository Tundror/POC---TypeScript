import { FilmStructure } from "../protocols/index";
import { db } from "../database/database";

export async function getFilms(){
    const result = await db.query(`SELECT name, genre, platform, watched FROM films`)
    return result;
}

export async function addFilm(film: FilmStructure){
    return await db.query(`INSERT INTO films (name, genre, platform, watched) VALUES ($1, $2, $3, $4)`, [film.name, film.genre, film.platform, film.watched])
}

export async function updateFilm(id: number, film: FilmStructure) {
    const result = await db.query(
        `UPDATE films SET name=$1, genre=$2, platform=$3, watched=$4 WHERE id=$5`,
        [film.name, film.genre, film.platform, film.watched, id]
    );
    return result;
}

export async function deleteFilm(id: number) {
    const result = await db.query(`DELETE FROM films WHERE id=$1`, [id]);
    return result;
}

export async function getFilmById(id: number) {
    const result = await db.query("SELECT * FROM films WHERE id = $1", [id]);
    return result.rows[0];
}