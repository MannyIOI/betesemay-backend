import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return Promise.all([
        knex.schema.createTable("categories", table => {
            table.uuid("id").primary();
            table.string("title");
            table.dateTime("created_at");
            table.dateTime("updated_at");
        })
    ])
}


export async function down(knex: Knex): Promise<any> {
    return Promise.all([knex.schema.dropTable("categories")])
}

