const createHistory = async (_, args, { model }, __) => {
    return model.ItemHistory.insertAndFetch({...args.data})
}

const getAllHistory = async (_, args, { model }, __) => {
    return model.ItemHistory.query()
}

export default {
    Query: {
        getAllHistory
    },
    Mutation: {
        createHistory
    }
}