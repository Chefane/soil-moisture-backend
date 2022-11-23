import express from 'express';
import DB_CONNECTION from "./config/dbConnect";
import * as mongoose from "mongoose";
import { PORT } from "./config/utils";
import { errorHandler } from "./middlewares/errorMiddleware";
import routes from './routes/route';
import cors from "cors";




const app = express();
app.use(cors());
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose
  .connect(DB_CONNECTION)
  .then(() => console.log("Connected to database!"))
  .catch((e) => console.log(e));




app.get('/', (req, res) => {
 res.send("Soil mositure rest API");
});

app.use(routes);


app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`, app.get("port"));

});