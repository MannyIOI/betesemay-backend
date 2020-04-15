const createCategory = async (_, args, { model }, __) => {
    return await model.Category.query().insertAndFetch({...args.data});
}

const getAllCategories = async (_, args, { model }, __) => {
    return await model.Category.query().page(args.page, 11);
}

const searchCategories = async (_, args, { model }, __) => {
    return await model.Category.query()
                                .where('title', 'ilike', '%'+args.title+'%')
                                .page(args.page, args.limit)
}

const getCategory = (_, args, { model }, __) => {
    return model.Category.query().findById(args.id);
}

const updateCategory = (_, args, { model }, __) => {
    return model.Category.query().patchAndFetchById(args.id, args.data)
}

const deleteCategory = (_, args, { model }, __) => {
    return model.Category.query().where({ id: args.id }).del()
}

const deleteAllCategories = (_, args, { model }, __) => {
    return model.Category.query().del()
}

export default {
    Query: {
        getAllCategories,
        searchCategories
    },
    Mutation: {
        createCategory,
        deleteAllCategories
    }
}