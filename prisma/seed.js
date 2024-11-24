const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Create sample posts
  await prisma.post.create({
    data: {
      title: "Welcome to the CMS",
      slug: "welcome-to-the-cms",
      content:
        "<p>This is the welcome post content with <strong>bold</strong> text.</p>",
    },
  });

  // Create sample pages
  await prisma.page.create({
    data: {
      title: "About Us",
      slug: "about-us",
      content:
        "<p>This is the about us page content with <em>italicized</em> text.</p>",
    },
  });
  // Create sample plugins
  await prisma.plugin.create({
    data: {
      name: "SEO Plugin",
      description: "This plugin helps with SEO optimization.",
      callback: "seoCallbackFunction",
      contentBlocks: ["header", "footer", "sidebar"],
    },
  });

  await prisma.plugin.create({
    data: {
      name: "Analytics Plugin",
      description: "This plugin integrates with analytics tools.",
      callback: "analyticsCallbackFunction",
      contentBlocks: ["script", "tracking", "dataLayer"],
    },
  });
  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
