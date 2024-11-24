const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/postRoutes");
const pageRoutes = require("./routes/pageRoutes");
const pluginRoutes = require("./routes/pluginRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/posts", postRoutes);
app.use("/api/pages", pageRoutes);
app.use("/api/plugins", pluginRoutes);

module.exports = app;
