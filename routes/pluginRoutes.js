const express = require("express");
const router = express.Router();
const pluginController = require("../controllers/pluginController");

router.post("/", pluginController.createPlugin);
router.get("/", pluginController.getAllPlugins);
router.get("/:id", pluginController.getPluginById);
router.put("/:id", pluginController.updatePlugin);
router.delete("/:id", pluginController.deletePlugin);

module.exports = router;
