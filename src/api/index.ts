import { makeExecutableSchema } from "graphql-tools";
import { importSchema } from "graphql-import";
import { model } from "./utils/models";

import customer from "./employee/employee.resolver"
import item from "./item/item.resolver"
import category from "./category/category.resolver"
import history from "./itemHistory/itemHistory.resolver"

const resolvers = {
    Query: {
        ...item.Query,
        ...customer.Query,
        ...category.Query,
        ...history.Query
    },
    Mutation: {
        ...item.Mutation,
        ...customer.Mutation,
        ...category.Mutation,
        ...history.Mutation
    },
    Item: {
        category: item.Category
    }
}

const typeDefs = importSchema(`${__dirname}/schema.graphql`)

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default {
    schema,
    context: req => {
        return {
            req,
            model
        }
    }
}