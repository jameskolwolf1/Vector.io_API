import initKnew from 'knex';
import configuration from "../knexfile.js";

const knex = initKnew(configuration);
import express from 'express';
const router = express.Router();

router.get("/", async (_req, res) => {

    try {
        const data = await knex("posts")
        res.status(200).json(data);
        
    } catch (error) {
        res.status(400).send('Error getting List of Posts')
    }
})

export default router;