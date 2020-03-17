"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const apollo_server_express_1 = require("apollo-server-express");
const api_1 = __importDefault(require("./api"));
const knex_1 = __importDefault(require("knex"));
const env = process.env.NODE_ENV || "development";
const connection = require('../knexfile');
const { Model } = require("objection");
const knexConnection = knex_1.default(connection[env]);
Model.knex(knexConnection);
require("dotenv").config();
const app = express_1.default();
const path = "/graphql";
app.use(cors_1.default());
const server = new apollo_server_express_1.ApolloServer(api_1.default);
server.applyMiddleware({ app, path: "/graphql" });
app.listen(process.env.PORT, () => {
    console.log(`the server is running at http://localhost:${process.env.PORT}/graphql`);
});
