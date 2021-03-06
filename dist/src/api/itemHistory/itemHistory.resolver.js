"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createHistory = async (_, args, { model }, __) => {
    return model.ItemHistory.insertAndFetch({ ...args.data });
};
const getAllHistory = async (_, args, { model }, __) => {
    return model.ItemHistory.query();
};
exports.default = {
    Query: {
        getAllHistory
    },
    Mutation: {
        createHistory
    }
};
