import express from 'express';
import * as computerComponents from "../controllers/CC-controller.js"
const router = express.Router();

router.get("/", computerComponents.getComputerComponent);
router.get("/:id", computerComponents.getComputerComponentById);
router.get("/:id/solutions", computerComponents.getSolutionByComputerComponentId);
router.get("/:id/versionOrModels", computerComponents.getVersionOrModelByComputerComponentId);

export default router;