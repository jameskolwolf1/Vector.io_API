export function up(knex) {
    return knex.schema.createTable('posts', (table) => {
        
        table.increments('id').primary();
        table.integer('computerComponent.id').unsigned().references('id').inTable('computerComponent');
        table.integer('comments.id').unsigned().references('id').inTable('computerComponent');
        table.string('title').notNullable();
        table.timestamp('post_date').defaultTo(knex.fn.now());
        table.string('article_title').unsigned().references('id').inTable('articles');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('posts');
}