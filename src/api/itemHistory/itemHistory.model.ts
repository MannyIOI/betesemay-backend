import { BaseModel } from "../utils/base.model"

const unique = require("objection-unique")({
    fields: ["lend_date"],
    identifiers: ["id"]
});

export class ItemHistory extends unique(BaseModel) {
    static get tableName(): string{
        return "histories";
    }

    static get idColumn(): string{
        return "id";
    }

    static get jsonSchema() {
        return {
          type: "object",
          required: ["dispense_date", "expected_return_date", "item", "to"],
          properties: {
            dispense_date: { type: "string", minLength: 1, maxLength: 255 },
            expected_return_date: { type: "string" },
            return_date: { type: "string", minLength: 1, maxLength: 255 },
            item: { type: "uuid"},
            to: { type: "uuid"}
          }
        };
      }
}