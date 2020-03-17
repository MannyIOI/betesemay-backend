 import uuid from "uuid/v4";
const objection = require("objection");

export class BaseModel extends objection.Model {
  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = new Date().toISOString();
    this.id = uuid();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}
