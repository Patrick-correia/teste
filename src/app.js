import express from "express";
import routes from "./routes/emplooyeRoutes.js"

const app = express();

//primeiro informa como vai receber os dados na api
app.use(express.json());
//para depois passar quem vai manipula-los
app.use(routes);
// app.use("/api", routes);
export default app;