const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");
const router = Router();

router.post("/add/photo", newsController.addPhotoId)
router.post("/add/news", newsController.addNews);
router.delete("/delete/:news", newsController.deleteNews);
router.patch("/change/:news", newsController.changeNews);
router.get("/newsId/:id", newsController.viewerNewsId);
router.get("/news", newsController.viewerNews);
router.get("/category/:id", newsController.viewerCategoryNewsId);

module.exports = router;
