const pageService = require("../services/pageService");

exports.createPage = async (req, res) => {
  try {
    const page = await pageService.createPage(req.body);
    res.status(201).json(page);
  } catch (error) {
    res.status(500).json({ error: "Error creating page" });
  }
};

exports.getAllPages = async (req, res) => {
  try {
    const pages = await pageService.getAllPages();
    res.status(200).json(pages);
  } catch (error) {
    res.status(500).json({ error: "Error fetching pages" });
  }
};

exports.getPageById = async (req, res) => {
  try {
    const page = await pageService.getPageById(req.params.id);
    if (!page) return res.status(404).json({ error: "Page not found" });
    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({ error: "Error fetching page" });
  }
};

exports.updatePage = async (req, res) => {
  try {
    const updatedPage = await pageService.updatePage(req.params.id, req.body);
    res.status(200).json(updatedPage);
  } catch (error) {
    res.status(500).json({ error: "Error updating page" });
  }
};

exports.deletePage = async (req, res) => {
  try {
    await pageService.deletePage(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error deleting page" });
  }
};
