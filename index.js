import 'dotenv/config';
import express from "express";
import cors from "cors";
import computerComponentsRoutes from "./routes/computerComponents-routes.js";
import postsRoutes from "./routes/posts-routes.js"
import commentsRoutes from './routes/comments-routes.js';

const app = express();
const PORT = process.env.PORT || 8080; 
app.use(cors());
app.use(express.static('public'))
app.use(express.json());

app.use("/computerComponents", computerComponentsRoutes);
app.use("/posts", postsRoutes);
app.use("/comments", commentsRoutes);

app.get("/", (req, res) => {

    res.send("Welcome to vector.io");
});

app.listen(PORT, () => {

    console.log(`Running on port ${PORT}`);
});

