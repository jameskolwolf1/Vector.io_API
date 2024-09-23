/**
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const timestamp = new Date();
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("versionOrModels").del();
  await knex("versionOrModels").insert(
    [
      {
        id: 1,
        title: "A",
        information: "sjnsdv [sv sdv sdv sdv sdv sd vs vs dfv sdv sdv sd vsd vsd vsdvsdv",
      },
      {
        id: 2,
        title: "E",
        information: "sjnsdv [sv sdv sdv sdv sdv sd vs vs dfv sdv sdv sd vsd vsdvsdv",
      },
      {
        id: 3,
        title: "I",
        information: "sjnsdv [sv sdv sdv sdv sdv sd vs vs dfv sdv sdv sd vsd vsd vsdvsdv",
      },
      {
        id: 4,
        title: "O",
        information: "sjnsdv [sv sdv sdv sdv sdv sd vs vs dfv sdv sdv sd vsd vsd vsdvsdv",
      }
    ])
}
