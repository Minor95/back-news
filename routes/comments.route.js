const { Router } = require("express");
const { commentController } = require("../controllers/comments.controller");
const router = Router();

router.post("/add/comment", commentController.addComment);
router.delete("/delete/comment/:id", commentController.deleteComment);

module.exports = router;
