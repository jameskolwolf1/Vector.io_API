/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex){

    return knex.schema.createTable('versionOrModels', (table) => {

        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('information').notNullable();

    }).createTable('solutions', (table) => {

        table.increments('id').primary();
        table.string('text').notNullable();

    }).createTable('computerComponents', (table) => {

        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('image_product').notNullable();
        table.string('image_info').notNullable();
        table.string('general_info').notNullable();
        table.integer('versionOrModel_id').unsigned().references('id').inTable('versionOrModels');
        table.integer('solutions_id').unsigned().references('id').inTable('solutions');
        table.string('category').notNullable();
    }).createTable('comments', (table) => {
        
        table.increments('id').primary();
        table.string('text').notNullable();
        table.integer('likes').notNullable().defaultTo(0);

    })
    .createTable('posts', (table) => {
        
        table.increments('id').primary();
        table.integer('computerComponents_id').unsigned().references('id').inTable('computerComponents');
        table.integer('comments_id').unsigned().references('id').inTable('comments');
        table.string('title').notNullable();
        table.timestamp('post_date').defaultTo(knex.fn.now());
        table.string('article_title').notNullable();

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
