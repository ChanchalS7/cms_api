const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

router.post("/", pageController.createPage);
router.get("/", pageController.getAllPages);
router.get("/:id", pageController.getPageById);
router.put("/:id", pageController.updatePage);
router.delete("/:id", pageController.deletePage);

module.exports = router;
