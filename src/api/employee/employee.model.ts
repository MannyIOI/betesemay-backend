import { BaseModel } from "../utils/base.model"

const unique = require("objection-unique")({
    fields: ["email"],
    identifiers: ["id"]
});

export class Employee extends unique(BaseModel) {
    static get tableName(): string{
        return "employees";
    }

    static get idColumn(): string{
        return "id";
    }

    static get jsonSchema() {
        return {
          type: "object",
          // firstname, lastname, email, phone number, address, role, photo
          required: ["email", "phone_number", "first_name", "last_name", "role"],
          properties: {
            email: { type: "string", minLength: 1, maxLength: 255 },
            phone_number: { type: "string", minLength: 1, maxLength: 255 },
            first_name: { type: "string", minLength: 1, maxLength: 255 },
            last_name: { type: "string", minLength: 1, maxLength: 255 },
            role: { type: "string", minLength: 1, maxLength: 255 },
            imageId: { type: "string" }
          }
        };
      }
}