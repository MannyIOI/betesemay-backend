import express from "express"
import cors from "cors"
import { ApolloServer } from "apollo-server-express"
import api from './api'
import Knex from "knex"

const env = process.env.NODE_ENV || "development";

const connection = require('../knexfile')
const { Model } =  require("objection");

const knexConnection = Knex(connection[env]);
Model.knex(knexConnection)

require("dotenv").config()

const app: express.Application = express()

const path = "/graphql"

app.use(cors())


const server = new ApolloServer(api)

server.applyMiddleware({app, path: "/graphql"})

app.listen(process.env.PORT, () => {
    console.log(
        `the server is running at http://localhost:${process.env.PORT}/graphql`
    )
})