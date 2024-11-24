const pluginService = require("../services/pluginService");

exports.createPlugin = async (req, res) => {
  try {
    const plugin = await pluginService.createPlugin(req.body);

    res.status(201).json(plugin);
  } catch (error) {
    res.status(500).json({ error: error.message || "Error creating plugin" });
  }
};

exports.getAllPlugins = async (req, res) => {
  try {
    const plugins = await pluginService.getAllPlugins();
    res.status(200).json(plugins);
  } catch (error) {
    res.status(500).json({ error: "Error fetching plugins" });
  }
};

exports.getPluginById = async (req, res) => {
  try {
    const plugin = await pluginService.getPluginById(req.params.id);
    if (!plugin) return res.status(404).json({ error: "Plugin not found" });
    res.status(200).json(plugin);
  } catch (error) {
    res.status(500).json({ error: "Error fetching plugin" });
  }
};

exports.updatePlugin = async (req, res) => {
  const { id } = req.params;
  const pluginData = req.body;
  try {
    const updatedPlugin = await pluginService.updatePlugin(id, pluginData);
    res.status(200).json(updatedPlugin);
  } catch (error) {
    console.error("Error in updatePlugin controller:", error);
    res.status(500).json({ error: error.message || "Error updating plugin" });
  }
};

exports.deletePlugin = async (req, res) => {
  try {
    await pluginService.deletePlugin(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error deleting plugin" });
  }
};
