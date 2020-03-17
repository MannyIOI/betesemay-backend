"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const graphql_import_1 = require("graphql-import");
const models_1 = require("./utils/models");
const employee_resolver_1 = __importDefault(require("./employee/employee.resolver"));
const item_resolver_1 = __importDefault(require("./item/item.resolver"));
const category_resolver_1 = __importDefault(require("./category/category.resolver"));
const itemHistory_resolver_1 = __importDefault(require("./itemHistory/itemHistory.resolver"));
const resolvers = {
    Query: {
        ...item_resolver_1.default.Query,
        ...employee_resolver_1.default.Query,
        ...category_resolver_1.default.Query,
        ...itemHistory_resolver_1.default.Query
    },
    Mutation: {
        ...item_resolver_1.default.Mutation,
        ...employee_resolver_1.default.Mutation,
        ...category_resolver_1.default.Mutation,
        ...itemHistory_resolver_1.default.Mutation
    },
    Item: {
        category: item_resolver_1.default.Category
    }
};
const typeDefs = graphql_import_1.importSchema(`${__dirname}/schema.graphql`);
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers
});
exports.default = {
    schema,
    context: req => {
        return {
            req,
            model: models_1.model
        };
    }
};
