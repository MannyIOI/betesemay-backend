"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("../utils/base.model");
const category_model_1 = require("../category/category.model");
const unique = require("objection-unique")({
    fields: ["id"],
    identifiers: ["id"]
});
class Item extends base_model_1.BaseModel {
    static get tableName() {
        return "items";
    }
    static get idColumn() {
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
                quantity: { type: "integer" },
                in_coffin: { type: "integer" },
            }
        };
    }
    static get relationMappings() {
        return {
            categoryDetail: {
                relation: base_model_1.BaseModel.BelongsToOneRelation,
                modelClass: category_model_1.Category,
                join: {
                    from: "items.category",
                    to: "category.id"
                }
            }
        };
    }
}
exports.Item = Item;
