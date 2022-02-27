const News = require("../models/News.model")
const Comment = require("../models/Comments.model")
const Category = require("../models/Category.model")

module.exports.newsController = {
    addNews: async (req, res) => {
        try {
            await News.create({
                header: req.body.header,
                text: req.body.text,
                category: req.body.category,
                photo: req.body.photo
            })
            res.json("новость добавлена")
        } catch (err) {
            res.json(err)
        }
    },
    deleteNews: async (req, res) => {
        try {
            await News.findByIdAndDelete(req.params.id)
            res.json("новость удалена")
        } catch (err) {
        res.json(err)
        }
    },
    changeNews: async (req, res) => {
        try {
            await News.findByIdAndUpdate(req.params.id, req.body)
            res.json("изменено")
        } catch (err) {
            res.json(err)
        }
    },
    viewerNewsId: async (req, res) => {
        try {
            const oneNews = await News.findById(req.params.id)
            const comments = await Comment.find({ news: req.params.id }).lean()
            const category = await Category.find().lean()
            res.render("one-news", {
                oneNews,
                comments,
                category
            }) 
        } catch (err) {
            res.json(err)
        }
    },
    viewerNews: async (req, res) => {
        try {
            const news = await News.find().lean() 
            const category = await Category.find().lean()
            res.render("news", {
                news, 
                category
            })
        } catch (err) {
            res.json(err)
        }
    },
    viewerCategoryNewsId: async (req, res) => {
        try {
            const news = await News.find({ category: req.params.id }).lean()
            const category = await Category.find().lean()
            res.render("news", {
                news,
                category
            })
        } catch (err) {
            res.json(err)
        }
    }
}