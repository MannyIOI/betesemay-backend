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
          required: ["email", "phoneNumber", "firstName", "lastName", "jobTitle"],
          properties: {
            email: { type: "string", minLength: 1, maxLength: 255 },
            phoneNumber: { type: "string", minLength: 1, maxLength: 255 },
            firstName: { type: "string", minLength: 1, maxLength: 255 },
            lastName: { type: "string", minLength: 1, maxLength: 255 },
            jobTitle: { type: "string", minLength: 1, maxLength: 255 }
          }
        };
      }
}