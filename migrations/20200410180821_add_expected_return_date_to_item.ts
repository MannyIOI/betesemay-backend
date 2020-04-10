import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return Promise.all([
        knex.schema.table("items", table=>{
            table.dateTime("expected_return_date")
        })
    ])
}


export async function down(knex: Knex): Promise<any> {
    return Promise.all([
        knex.schema.table("items", table=>{
            table.dropColumn("expected_return_date")
        })
    ])
}