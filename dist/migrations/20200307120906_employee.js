"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function up(knex) {
    return Promise.all([
        knex.schema.createTable("employees", table => {
            table.uuid("id").primary();
            table.string("first_name");
            table.string("last_name");
            table.string("email");
            table.integer("phone_number");
            table.string("address");
            table.string("role");
            table.dateTime("created_at");
            table.dateTime("updated_at");
        })
    ]);
}
exports.up = up;
async function down(knex) {
    return Promise.all([
        knex.schema.dropTable("employees")
    ]);
}
exports.down = down;
