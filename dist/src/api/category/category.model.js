"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("../utils/base.model");
class Category extends base_model_1.BaseModel {
    static get tableName() {
        return "categories";
    }
    static get idColumn() {
        return "id";
    }
    static get jsonSchema() {
        return {
            type: "object",
            required: [],
            properties: {
                title: { type: "string" }
            }
        };
    }
}
exports.Category = Category;
