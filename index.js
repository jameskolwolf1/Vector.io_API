import 'dotenv/config';
import knex from 'knex';
import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'))
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {

    res.send("Welcome to vector.io");
});

app.listen(PORT, () => {

    console.log(`Running on port ${PORT}`);
});

