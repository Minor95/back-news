const Comment = require("../models/Comments.model");
const News = require("../models/News.model")
module.exports.commentController = {
    addComment: async (req, res) => {
        try {
            await Comment.create({
                name: req.body.name,
                text: req.body.text,
                news: req.body.news,
            })
            res.json("коментарий опублекован")
        } catch {
            res.json(err)
        }
    },
    deleteComment: async (req, res) => {
        try {
            await Comment.findByIdAndDelete(req.params.id);
            res.json("коментарий удален")
        } catch {
            res.json(err)
        }
    },
}