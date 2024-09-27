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
export const getSolutionByComputerComponentId = async (req, res) => {
    const {id} = req.params;

    try {
        
        const component = await knex("computerComponents").where({id}).first();

        if(component === null || component === undefined){

            res.status(404).send('Error getting Computer Components');
        }

        const solutionsList = await knex("solutions").where({computerComponents_id : id});
        return res.status(200).json(solutionsList);

    } catch (error) {
        
        res.status(400).send("Error getting solutions by component ID");
    }
}
export const getVersionOrModelByComputerComponentId = async (req, res) => {
    
    const {id} = req.params;

    try {
        
        const component = await knex("computerComponents").where({id}).first();

        if(component === null || component === undefined){

            res.status(404).send('Error getting Computer Components');
        }

        const versionOrModelsList = await knex("versionOrModels").where({computerComponents_id : id});
        return res.status(200).json(versionOrModelsList);

    } catch (error) {
        
        res.status(400).send("Error getting version or Models by component ID");
    }
}
export const getPostsByComputerComponentId = async (req, res) => {

    const {id} = req.params;

    try {
        const component = await knex("computerComponents").where({id}).first();

        if(component === null || component === undefined){

            res.status(404).send("Error getting Computer Components");
        }
        const postsList = await knex("posts").where({computerComponents_id : id});
        return res.status(200).json(postsList);
    } catch (error) {
        
        res.status(400).send("Error getting posts by component ID")
    }
}

export const postPostsByComputerComponentId = async (req, res) => {

    let { id } = req.params; 


    if(!req.body.title || !req.body.description){


        return res.status(400).json({
            message: "Please fill all the felids",
        });
    }

    try {

        const data = await knex("posts").insert({
            
            title: req.body.title,
            description: req.body.description,
            computerComponents_id: id

        });

        const newPostsId = data[0];
        const createPosts = await knex("posts").where({id: newPostsId}).first();
        res.status(201).json(createPosts);
        
    } catch (error) {
        
        res.status(400).send("Error getting posts by component ID Error" + error);
    }
}