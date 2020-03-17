"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("../utils/base.model");
const unique = require("objection-unique")({
    fields: ["email"],
    identifiers: ["id"]
});
class Employee extends unique(base_model_1.BaseModel) {
    static get tableName() {
        return "employees";
    }
    static get idColumn() {
        return "id";
    }
    static get jsonSchema() {
        return {
            type: "object",
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
exports.Employee = Employee;
