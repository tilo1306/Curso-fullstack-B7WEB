import express from "express";

import mainRoutes from "./routes";
import painelRoutes from "./routes/painel";

const server = express();

server.use(mainRoutes);
server.use("/painel", painelRoutes);

server.listen(3000);
