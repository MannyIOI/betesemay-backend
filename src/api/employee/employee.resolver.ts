const createEmployee = async (_, args, {model}, __) => {
    let employee = await model.Employee.query()
                                .where({ phone_number: args.data.phone_number })
                                .orWhere({ email: args.data.email }).count('*').first()
    if(employee.count > 0){ throw new Error("Sorry a user already exists with this phone number and/or email") }

    return await model.Employee.query().insertAndFetch({...args.data})
}

const getEmployee = async (_, args, { model }, __) => {
    return await model.Employee.query().findOne({ id: args.id })
}

const getAllEmployees = async (_, args, {model}, __) => {
    return await model.Employee.query().page(args.page, 11);
}

const updateEmployee = async (_, args, {model}, __) =>{ 
    return await model.Employee.query()
                                .patchAndFetchById(args.data.id, args.data)
}

const deleteEmployee = async (_, args, {model}, __) => {
    return await model.Employee.query()
                                    .where({id: args.id})
                                    .del()
}

const deleteAllEmployees = async (_, args, { model }, __) => {
    return await model.Employee.query().del()
}

export default {
    Query: {
        getEmployee,
        getAllEmployees
    },
    Mutation: {
        createEmployee,
        updateEmployee,
        deleteEmployee
    }
}