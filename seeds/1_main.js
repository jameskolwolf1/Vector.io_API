import solutionsData from "../seed-data/solutions.js";
import commentsData from "../seed-data/comments.js";
import postsData from "../seed-data/posts.js";
import versionOrModelsData from "../seed-data/versionOrModels.js";
import computerComponents from "../seed-data/computerComponents.js"

export async function seed(knex){

  await knex("computerComponents").del();
  await knex("comments").del();
  await knex("posts").del();
  await knex("solutions").del();
  await knex("versionOrModels").del();
  await knex("versionOrModels").insert(versionOrModelsData);
  await knex("solutions").insert(solutionsData);
  await knex("computerComponents").insert(computerComponents);
  await knex("comments").insert(commentsData);
  await knex("posts").insert(postsData);
  
}
