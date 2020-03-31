import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return Promise.all([
        knex.schema.createTable("histories", table => {
            table.uuid("id");
            table.uuid("item").references("items.id");
            table.uuid("to").references("employees.id");
            table.enum("type", ["DISPENSED", "COLLECTED"])
            table.dateTime("created_at");
            table.dateTime("updated_at");
        })
    ]);
}


export async function down(knex: Knex): Promise<any> {
    return Promise.all([
        knex.schema.dropTable("histories")
    ]);
}

