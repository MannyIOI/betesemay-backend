const createHistory = async (_, args, { model }, __) => {
    return model.ItemHistory.query().insertAndFetch({...args.data})
}

const getAllHistory = async (_, args, { model }, __) => {
    return model.ItemHistory.query().page(args.page, 11)
}

const getHistoriesByItem = async (_, args, { model }, __) => {
    return model.ItemHistory.query()
                                .where({ item: args.item })
                                .orderBy('created_at', 'desc')
                                .page(args.page, 11)
}

const getLatestHistory = async (_, args, { model }, __) => {
    return model.ItemHistory.query().where({ item: args.item })
                                        .orderBy('created_at', 'desc')
                                        .limit(1)
                                        .first()
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
        getHistoriesByItem,
        getLatestHistory
    },
    Mutation: {
        createHistory
    },
    Item,
    Employee
}