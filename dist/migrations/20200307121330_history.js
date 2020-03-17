"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function up(knex) {
    return Promise.all([
        knex.schema.createTable("histories", table => {
            table.uuid("id");
            table.uuid("item").references("items.id");
            table.uuid("to").references("employees.id");
            table.date("dispense_date");
            table.date("expected_return_date");
            table.date("return_date");
            table.dateTime("created_at");
            table.dateTime("updated_at");
        })
    ]);
}
exports.up = up;
async function down(knex) {
    return Promise.all([
        knex.schema.dropTable("histories")
    ]);
}
exports.down = down;
