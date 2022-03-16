const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload")
const hbs = require("express-handlebars");
const path = require("path");
const app = express();

app.use(express.json());
app.use(require("./routes/index.js"));
app.use(fileUpload())
app.use(express.static(path.resolve(__dirname, "public")));
app.engine(".hbs", hbs({ extname: ".hbs", defaultLayout: "main.hbs" }));
app.set("view engine", ".hbs");

mongoose.connect(
  "mongodb+srv://Magomed:intonshable0895@cluster0.vvvw9.mongodb.net/bd_pharmacy?retryWrites=true&w=majority",
  () => {
    console.log("Successful connection MD");
    app.listen(3000, () => console.log("server started"));
  }
);
