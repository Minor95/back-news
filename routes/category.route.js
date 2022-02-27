const { Router } = require("express")
const { categoryController } = require("../controllers/category.controller")
const router = Router()

router.post("/add/category", categoryController.addCategory)
router.delete("/delete/category/:id", categoryController.deleteCategory)
router.get("/viewer/category", categoryController.viewerCategory)

module.exports = router
