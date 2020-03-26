const createHistory = async (_, args, { model }, __) => {
    return model.ItemHistory.query().insertAndFetch({...args.data})
}

const getAllHistory = async (_, args, { model }, __) => {
    return model.ItemHistory.query().page(args.page, 11)
}

const getHistoriesByItem = async (_, args, { model }, __) => {
    return model.ItemHistory.query().where({ item: args.item }).page(args.page, 11)
}

const Item = async (parent, _, {model}, __) => {
    return await model.Item.query().findOne({
        id: parent.item
    })
}

const Employee = async (parent, _, {model}, __) => {
    return await model.Employee.query().findOne({
        id: parent.to
    })
}

export default {
    Query: {
        getAllHistory,
        getHistoriesByItem
    },
    Mutation: {
        createHistory
    },
    Item,
    Employee
}