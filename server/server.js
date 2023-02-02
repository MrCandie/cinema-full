const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successful"));

app.get("/", (req, res) => {
  res.send("HELLO CANDIE");
});

const port = 8080;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
