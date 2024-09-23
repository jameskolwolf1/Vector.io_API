import 'dotenv/config';
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.static('public'))
app.use(express.json());


app.get("/", (req, res) => {

    res.send("Welcome to vector.io");
});

app.listen(PORT, () => {

    console.log(`Running on port ${PORT}`);
});

