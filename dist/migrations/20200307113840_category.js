"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function up(knex) {
    return Promise.all([
        knex.schema.createTable("categories", table => {
            table.uuid("id").primary();
            table.string("title");
            table.dateTime("created_at");
            table.dateTime("updated_at");
        })
    ]);
}
exports.up = up;
async function down(knex) {
    return Promise.all([knex.schema.dropTable("categories")]);
}
exports.down = down;
