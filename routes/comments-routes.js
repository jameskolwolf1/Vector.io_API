import express from 'express';
import * as comments from '../controllers/Comments-controller.js'
const router = express.Router();

router.put("/:id", comments.updateLikesByCommentId)

export default router;