"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const objection = require("objection");
class BaseModel extends objection.Model {
    $beforeInsert() {
        this.created_at = new Date().toISOString();
        this.updated_at = new Date().toISOString();
        this.id = v4_1.default();
    }
    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
    }
}
exports.BaseModel = BaseModel;
