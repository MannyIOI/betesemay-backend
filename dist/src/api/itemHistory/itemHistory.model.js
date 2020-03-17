"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("../utils/base.model");
const unique = require("objection-unique")({
    fields: ["lendDate"],
    identifiers: ["id"]
});
class ItemHistory extends unique(base_model_1.BaseModel) {
    static get tableName() {
        return "histories";
    }
    static get idColumn() {
        return "id";
    }
    static get jsonSchema() {
        return {
            type: "object",
            required: ["lendDate", "returnDate", "item", "employee"],
            properties: {
                lendDate: { type: "string", minLength: 1, maxLength: 255 },
                returnDate: { type: "string", minLength: 1, maxLength: 255 },
                item: { type: "uuid" },
                employee: { type: "uuid" }
            }
        };
    }
}
exports.ItemHistory = ItemHistory;
