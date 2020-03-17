"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createEmployee = async (_, args, { model }, __) => {
    return await model.Employee.query().insertAndFetch({ ...args.data });
};
const getEmployee = (_, args, { model }, __) => {
};
const getAllEmployees = async (_, args, { model }, __) => {
    return await model.Employee.query();
};
const updateEmployee = async (_, args, { model }, __) => {
    return await model.Employee.query()
        .patchAndFetchById(args.data.id, args.data);
};
const deleteEmployee = async (_, args, { model }, __) => {
    return await model.Employee.query()
        .where({ id: args.id })
        .del();
};
const deleteAllEmployees = async (_, args, { model }, __) => {
    return await model.Employee.query().del();
};
exports.default = {
    Query: {
        getEmployee,
        getAllEmployees
    },
    Mutation: {
        createEmployee
    }
};
