import express from 'express';
import * as posts from '../controllers/Posts-controller.js'
const router = express.Router();

router.get("/", posts.getPosts);
router.get("/:id", posts.getPostsById);
router.get("/:id/comments", posts.getCommandsByPostsId);
router.post("/:id/comments", posts.postCommandByPostsId);
export default router;