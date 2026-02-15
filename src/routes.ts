import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";

const router = Router();

router.get("/players", PlayerController.getPlayers);
router.post("/players", PlayerController.createPlayer);

router.get("/players/:id", PlayerController.getPlayerById);

export default router;
