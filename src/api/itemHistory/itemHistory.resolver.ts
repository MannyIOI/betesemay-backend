const createHistory = async (_, args, { model }, __) => {
    // console.log(model)
    console.log(new Date())
    return model.ItemHistory.query().insertAndFetch({...args.data})
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