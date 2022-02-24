import express, { Request, Response } from "express";
import path from "path";

import mainRoutes from "./routes";
import painelRoutes from "./routes/painel";

const server = express();

server.use(express.static(path.join(__dirname, "../public")));

server.use(mainRoutes);
server.use("/painel", painelRoutes);
server.use((req: Request, res: Response) => {
  res.status(404).send("Pagina não Encontrada");
});

server.listen(3000);
