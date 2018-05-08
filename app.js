const express = require("express");
const body_parser = require("body-parser");
const morgan = require("morgan");

const app = express();

app.use(morgan('dev'));
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));

//routes
app.use(require("./routes/main"));

app.listen(process.env.PORT || 3000,()=>console.log("Listening on port 3000"));
