import Joi from "joi";
import { FilmStructure } from "protocols";

export const filmSchema = Joi.object<FilmStructure>({
    name: Joi.string().required(),
    genre: Joi.string().required(),
    platform: Joi.string().required(),
    watched: Joi.boolean().required()
})
