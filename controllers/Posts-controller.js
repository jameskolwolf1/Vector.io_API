import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);


export const getPosts = async (_req, res) => {

    try {
        const data = await knex("posts")
        res.status(200).json(data);
        
    } catch (error) {
        res.status(400).send('Error getting Post List')
    }
}

export const getPostsById = async (req, res) => {

    let {id} = req.params;

    try {
        
        const data = await knex("posts").where({id}).first();

        if(!data){

            res.status(400).send("Error this Post doesn't exists")
        }

        res.status(200).json(data);

    } catch (error) {
        res.status(400).send('Error getting Posts')
    }
}
export const getCommandsByPostsId = async (req,res) => {
    let{id} = req.params;

    try {

        const posts = await knex("posts").where({id}).first();

        if(posts === null || posts === undefined){

            res.status(404).send('Error getting posts');
        }

        const commentsList = await knex("comments").where({posts_id : id});
        return res.status(200).json(commentsList);
        
    } catch (error) {
        
        res.status(400).send("Error getting solutions by posts ID")
    }
}
export const postCommandByPostsId = async (req, res) => {

    let{id} = req.params;

    if(!req.body.text){

        res.status(400).json({
            message: "You need to fill this field"
        });
    }

    try {

        const comment = await knex('comments').insert({

            text: req.body.text,
            likes: 0,
            posts_id: id
        })

        const newCommentId = comment[0];
        const createComment = await knex("comments").where({id : newCommentId}).first();
        res.status(200).json(createComment)
        
    } catch (error) {
        
        res.status(400).send("Error by posts ID")
    }
}