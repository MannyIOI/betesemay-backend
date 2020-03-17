import { BaseModel } from "../utils/base.model"

const unique = require("objection-unique")({
    fields: ["lendDate"],
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
          required: ["lendDate", "returnDate", "item", "employee"],
          properties: {
            lendDate: { type: "string", minLength: 1, maxLength: 255 },
            returnDate: { type: "string", minLength: 1, maxLength: 255 },
            item: { type: "uuid"},
            employee: { type: "uuid"}
          }
        };
      }
}