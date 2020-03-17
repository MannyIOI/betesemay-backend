import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
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
    ])
}


export async function down(knex: Knex): Promise<any> {
    return Promise.all([
        knex.schema.dropTable("items")
    ])
}

