import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const updateLikesByCommentId = async (req,res) => {

    
    try {

        if(!req.body.likes){

            res.status(400).json({
                message: "liking error"
            })
        }

        const likes = await knex("comments").update({

            likes: req.body.likes
        }).where({id : req.params.id});
        
        res.json(likes[0]);

        
    } catch (error) {
        
        res.status(500).json({
            message: `Cant update the likes in comment ID ${req.params.id} : ${error}`
        })
    }
}