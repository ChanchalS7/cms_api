const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const generateSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");

exports.createPage = async (pageData) => {
  const { title, content } = pageData;
  let slug = generateSlug(title);
  const existingPage = await prisma.page.findUnique({ where: { slug } });
  if (existingPage) slug += `-${Date.now()}`;

  return await prisma.page.create({
    data: {
      title,
      slug,
      content,
    },
  });
};

exports.getAllPages = async () => {
  return await prisma.page.findMany();
};

exports.getPageById = async (id) => {
  return await prisma.page.findUnique({ where: { id: parseInt(id) } });
};

exports.updatePage = async (id, pageData) => {
  const { title, content } = pageData;
  let slug = generateSlug(title);
  const existingPage = await prisma.page.findUnique({ where: { slug } });
  if (existingPage && existingPage.id !== parseInt(id))
    slug += `-${Date.now()}`;

  return await prisma.page.update({
    where: { id: parseInt(id) },
    data: {
      title,
      slug,
      content,
    },
  });
};

exports.deletePage = async (id) => {
  return await prisma.page.delete({
    where: { id: parseInt(id) },
  });
};
