const Category = require("../models/Category.model");

module.exports.categoryController = {
    addCategory: async (req, res) => {
        try {
            await Category.create({
                name: req.body.name
            });
            res.json("категория добавлена")
        } catch {
            res.json(err)
        }
    },
    deleteCategory: async (req, res) => {
        try {
            await Category.findByIdAndDelete(req.params.id);
            res.json("категория удалена")
        } catch {
            res.json(err)
        }
    },
    viewerCategory: async (req, res) => {
        try {
            const data = Category.find()
            res.json(data)
        } catch {
            res.json(err)
        }
    }
}
