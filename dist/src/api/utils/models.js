"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_model_1 = require("../item/item.model");
const employee_model_1 = require("../employee/employee.model");
const itemHistory_model_1 = require("../itemHistory/itemHistory.model");
const category_model_1 = require("../category/category.model");
exports.model = {
    Item: item_model_1.Item,
    Employee: employee_model_1.Employee,
    ItemHistory: itemHistory_model_1.ItemHistory,
    Category: category_model_1.Category
};
