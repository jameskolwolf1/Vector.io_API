/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex){

    return knex.schema.createTable('computerComponents', (table) => {

        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('image_product').notNullable();
        table.string('image_info').notNullable();
        table.string('general_info').notNullable();
        table.integer('versionOrModel_id').unsigned().references('versionOrModel_id');
        table.integer('solution_id').unsigned().references('versionOrModel_id');
        table.string('category').notNullable();
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {

    return knex.schema.dropTable('computerComponents');
}
