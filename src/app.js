import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import globalRouter from "./router/globalRouter";

const PORT = process.env.PORT;

const app = express();

app.set(`view engine`, `pug`);
app.use(morgan(`dav`));

app.get("/", globalRouter);

app.get("/contact", globalRouter);

app.get("/javascript", globalRouter);

app.get("/mongodb", globalRouter);

app.get("/nodejs", globalRouter);

app.get("/react", globalRouter);

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START`);
});