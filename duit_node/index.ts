import express from "express";
import { router } from "./src/router";
import bodyParser from "body-parser";

const app = express();
const port = 8999;


app.use(router);
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});