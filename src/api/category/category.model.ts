import { BaseModel } from "../utils/base.model";

export class Category extends BaseModel {
    static get tableName(){
        return "categories";
    }

    static get idColumn(){ 
        return "id";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: [],
            properties: {
                title: { type: "string" }
            }
        }
    }
}