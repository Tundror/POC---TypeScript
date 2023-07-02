import { Request, Response } from "express"
import { ValidationErrorItem } from "joi"

export function validateSchema(schema) {
    return (req: Request, res: Response, next) => {
        const validation = schema.validate(req.body, { abortEarly: false })
        if (validation.error) {
            const errors = validation.error.details.map((detail: ValidationErrorItem) => detail.message)
            return res.status(422).send(errors)
        }
        next()
    }
}
