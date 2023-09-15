import express, { Router, json } from "express";
import peopleRouter from "./routers/people.router";

const app = express();

app.use(json());
app.use(peopleRouter);

app.listen(5000, () => {
  console.log(`Server is up and running on port 5000`);
})