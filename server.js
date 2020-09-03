const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const router = require("./controller/burgers_controller");
const PORT = process.env.PORT || 3000;

// Set handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Middleware
app.use(express.static("public"));
//app.use(express.urlencoded({ extended: true}));
app.use(express.json()); 

app.use("/", router);



// Listen to the port
app.listen(PORT, () => {
  console.log(`App is currently listening at localhost:${PORT}`);
});