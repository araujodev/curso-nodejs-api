import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let db = mongoose.connect(
  "mongodb+srv://dbLeandro:123456789m@cluster0-2hb5w.mongodb.net/dev_api_js?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

routes(app);

app.listen(3000, () => {
  console.log("Api on port 3000");
});
