import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return Promise.all([
        knex.schema.table("items", table=>{
            table.string("imageId")
        })
    ])
}


export async function down(knex: Knex): Promise<any> {
    return Promise.all([
        knex.schema.table("items", table=>{
            table.dropColumn("imageId")
        })
    ])
}