"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function up(knex) {
    return Promise.all([
        knex.schema.createTable("items", table => {
            table.uuid("id").primary();
            table.string("title");
            table.uuid("category").references("categories.id");
            table.string("description");
            table.integer("dispense_period");
            table.integer("quantity");
            table.integer("in_coffin");
            table.dateTime("created_at");
            table.dateTime("updated_at");
        })
    ]);
}
exports.up = up;
async function down(knex) {
    return Promise.all([
        knex.schema.dropTable("items")
    ]);
}
exports.down = down;
