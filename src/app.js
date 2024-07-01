const express = require("express");
const router = require("./routes/visitor.routes");

const app = express();

app.set("trust proxy", true);

app.use("/api/hello", router);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
