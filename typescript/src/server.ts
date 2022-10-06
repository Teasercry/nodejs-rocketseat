import express from "express";
import { CreateCourse } from "./routes";
const app = express();

app.listen(3333);

app.get("/", CreateCourse);

