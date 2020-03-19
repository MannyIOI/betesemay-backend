import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return Promise.all([
        knex.schema.createTable("employees", table => {
            table.uuid("id").primary();
            table.string("first_name");
            table.string("last_name");
            table.string("email").unique();
            table.integer("phone_number").unique();
            table.string("address");
            table.string("role");
            table.dateTime("created_at");
            table.dateTime("updated_at");
        })
    ])
}


export async function down(knex: Knex): Promise<any> {
    return Promise.all([
        knex.schema.dropTable("employees")
    ])
}

