/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex){

    return knex.schema.createTable('posts', (table) => {

        table.increments('id').primary();
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knux) {

    return knex.schema.dropTable('posts');
}
