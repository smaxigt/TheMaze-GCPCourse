var express = require("express"),
  app = express(),
  port = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
