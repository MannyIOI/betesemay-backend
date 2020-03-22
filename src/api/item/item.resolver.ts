const getItem = async (_, args, { model }, __) => {
    return await model.Item.query().findById(args.id);
}
const getAllItems = async (_, args, { model }, __) => {
    return await model.Item.query().page(args.page, 11)
}

const getItemsByCategory = async(_, args, { model }, __) => {
    return await model.Item.query().where({ category: args.category }).page(args.page, 11)
}

const createItem = async (_, args, { model }) => {
    return await model.Item.query().insertAndFetch({...args.data})
}

const deleteAllItems = async (_, args, { model }) => {
    return await model.Item.query().del()
}

const deleteItem = async (_, args, {model}) => {
    return await model.Item.query()
                            .where({id: args.id})
                            .del()
}

const updateItem = async (_, args, { model }) => {
    return await model.Item.query()
                            .patchAndFetchById(args.data.id, args.data)
}

// const dispenseItem = async (_, args, { model }) => {
//     return await model.Item.query().patchAndFetchById(args.data.id, args.)
// }

// const collectItem = async (_, args, { model }) => {
//     return await model.Item.query().patchAndFetchById(args.data.id, args.data)
// }

const Category = async (parent, args, { model }) => {
    return await model.Category.query().findOne({
        id: parent.category
    })
} 

export default {
    Query: {
        getItem,
        getAllItems,
        getItemsByCategory
    },  
    Mutation: {
        createItem,
        deleteAllItems,
        deleteItem,
        updateItem
    },
    Category
}