/**
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */


export async function seed(knex) {

  await knex("comments").del();
  await knex("comments").insert([
    {
      id: 1,
      post_id: 1,
      text: "sjnsdv [sv sdv sdv sdv sdv sd vs vs dfv sdv sdv sd vsd vsd vsdvsdv",
      likes: 3,
    },
    {
      id: 2,
      post_id: 2,
      text: "sjnsdv [sv sdv sdv sdv sdv sd vs vs dfv sdv sdv sd vsd vsdvsdv",
      likes: 3,
    },
    {
      id: 3,
      post_id: 3,
      text: "sjnsdv [sv sdv sdv sdv sdv sd vs vs dfv sdv sdv sd vsd vsd vsdvsdv",
      likes: 3,
    },{
      id: 4,
      post_id: 4,
      text: "sjnsdv [sv sdv sdv sdv sdv sd vs vs dfv sdv sdv sd vsd vsd vsdvsdv",
      likes: 3,
    }
  ]);
};