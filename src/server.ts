import "reflect-metadata"; // Importante colocar no topo do arquivo
import express from "express";
import swaggerUi from "swagger-ui-express";
import router from "./routes";

import swaggerFile from "./swagger.json";

import "./database";
import "./shared/container";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3000, () => console.log("Servidor Rodando na Porta 3000."));
