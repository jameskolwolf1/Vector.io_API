import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const getComputerComponent = async (_req, res) => {

    try {
        const data = await knex("computerComponents")
        res.status(200).json(data);
        
    } catch (error) {
        res.status(400).send('Error getting Computer Components List')
    }
}

export const getComputerComponentById = async (req, res) => {

    const {id} = req.params;
    try {

        const data = await knex("computerComponents").where({id}).first();

        if(data === null || data === undefined){

            res.status(404).send('Error this component doesnt exist')
        }
        
        res.status(200).json(data);
    } catch (error) {
        
        res.status(400).send('Error getting Computer Components')
    }
}