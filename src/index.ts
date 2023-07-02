import express, { Request, Response, json } from "express";
import httpStatus from "http-status";
import filmRouter from "./routes/films.routers";

const app = express();

app.use(json());
app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(httpStatus.OK)
})

app.use(filmRouter)

const port: number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => {
    console.log("Server is up and running")
})