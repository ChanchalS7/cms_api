const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const generateSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");

exports.createPost = async (postData) => {
  const { title, content } = postData;
  let slug = generateSlug(title);
  const existingPost = await prisma.post.findUnique({ where: { slug } });
  if (existingPost) slug += `-${Date.now()}`;

  return await prisma.post.create({
    data: {
      title,
      slug,
      content,
    },
  });
};

exports.getAllPosts = async () => {
  return await prisma.post.findMany();
};

exports.getPostById = async (id) => {
  return await prisma.post.findUnique({ where: { id: parseInt(id) } });
};

exports.updatePost = async (id, postData) => {
  const { title, content } = postData;
  let slug = generateSlug(title);
  const existingPost = await prisma.post.findUnique({ where: { slug } });
  if (existingPost && existingPost.id !== parseInt(id))
    slug += `-${Date.now()}`;

  return await prisma.post.update({
    where: { id: parseInt(id) },
    data: {
      title,
      slug,
      content,
    },
  });
};

exports.deletePost = async (id) => {
  return await prisma.post.delete({
    where: { id: parseInt(id) },
  });
};
