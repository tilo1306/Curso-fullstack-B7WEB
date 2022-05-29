import {Router} from "express";
import * as ApiController from "../controllers/apiController";

const router = Router();

router.get("/ping", ApiController.ping);
router.get("/random", ApiController.random);
router.get("/nome/:nome", ApiController.nome);

router.post("/frases", ApiController.createPhase);
router.get("/frases", ApiController.listPhrases);
router.get("/frase/:id", ApiController.getPhrases);
router.put("/frase/:id", ApiController.updatePhrase);

export default router;
