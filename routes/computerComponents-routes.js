import express from 'express';
import * as computerComponents from "../controllers/CC-controller.js"
const router = express.Router();

router.get("/", computerComponents.getComputerComponent);
router.get("/:id", computerComponents.getComputerComponentById);

export default router;