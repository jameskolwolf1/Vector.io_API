/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex){

    return knex.schema.createTable('comments', (table) => {

        table.increments('id').primary();
        table.integer('post_id').unsigned().references('post_id');
        table.string('text').notNullable();
        table.integer('likes').notNullable();

    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {

    return knex.schema.dropTable('comments');
}
