import { BaseModel } from "../utils/base.model"
import { Category } from "../category/category.model";

const unique = require("objection-unique")({
    fields: ["id"],
    identifiers: ["id"]
});

export class Item extends BaseModel{
    static get tableName(): string{
        return "items";
    }

    static get idColumn(): string{
        return "id";
    }

    static get jsonSchema() {
        return {
          type: "object",
          required: ["title", "description"],
          properties: {
            category: { type: "uuid" },
            title: { type: "string" },
            description: { type: "string" },
            state: { type: "string"},
            // inCasketCount: { type: "string", minLength: 1, maxLength: 255 }
          }
        };
      }
    
    static get relationMappings(){
      return {
        categoryDetail: {
          relation: BaseModel.BelongsToOneRelation,
          modelClass: Category,
          join: {
            from: "items.category",
            to: "category.id"
          }
        }
      }
    }
}