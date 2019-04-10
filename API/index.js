import "@babel/polyfill";

import express from "express";
import path from "path";
import bodyParser from "body-parser";
import api from "./routes/api";

const app = express();

app.set("port", process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", api);

app.use(express.static(path.join(__dirname, "../dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.listen(app.get("port"), (req, res) => {
  console.log("Magic happens on port: ", app.get("port"));
  console.log("We are on: ", process.env.NODE_ENV || "DEVELOPMENT");
});
