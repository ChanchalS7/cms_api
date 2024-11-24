const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createPlugin = async (pluginData) => {
  const { name, description, callback, contentBlocks } = pluginData;

  try {
    const plugin = await prisma.plugin.create({
      data: {
        name,
        description,
        callback,
        contentBlocks,
      },
    });
    return plugin;
  } catch (error) {
    throw new Error("Error creating plugin");
  }
};

exports.getAllPlugins = async () => {
  return await prisma.plugin.findMany();
};

exports.getPluginById = async (id) => {
  return await prisma.plugin.findUnique({ where: { id: parseInt(id) } });
};

exports.updatePlugin = async (id, pluginData) => {
  const { name, description, callback, contentBlocks } = pluginData;

  try {
    // Update the plugin in the database based on the provided ID
    const updatedPlugin = await prisma.plugin.update({
      where: { id: parseInt(id) }, // Ensure the ID is parsed as an integer
      data: {
        name,
        description,
        callback, // Update the callback URL
        contentBlocks, // Update the content blocks array
      },
    });
    return updatedPlugin; // Return the updated plugin object
  } catch (error) {
    console.error("Error updating plugin:", error);
    throw new Error("Error updating plugin: " + error.message); // Throw an error if something goes wrong
  }
};

exports.deletePlugin = async (id) => {
  return await prisma.plugin.delete({
    where: { id: parseInt(id) },
  });
};
