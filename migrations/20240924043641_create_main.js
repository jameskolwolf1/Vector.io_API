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
        table.string('category').notNullable();

    }).createTable('versionOrModels', (table) => {

        table.increments('id').primary();
        table.string('title').notNullable();
        table.integer("computerComponents_id");
        table.string('info1');
        table.string('info2');
        table.string('info3');

    }).createTable('solutions', (table) => {

        table.increments('id').primary();
        table.integer("computerComponents_id");
        table.string('text').notNullable();

    }).createTable('posts', (table) => {
        
        table.increments('id').primary();
        table.integer('computerComponents_id').unsigned().references('id').inTable('computerComponents');
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.timestamp('post_date').defaultTo(knex.fn.now());
    })
    .createTable('comments', (table) => {
        
        table.increments('id').primary();
        table.integer('posts_id').unsigned().references('id').inTable('posts');
        table.string('text').notNullable();
        table.integer('likes').notNullable().defaultTo(0);

    })
    
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {

    return knex.schema.dropTable('computerComponents')
    .dropTable('posts').dropTable('solutions')
    .dropTable('comments').dropTable('versionOrModels');
}
