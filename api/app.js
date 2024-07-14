const express = require("express")
const dotenv = require("dotenv")
dotenv.config({path:"./config.env"})
const router = require("./router")


const app = express();

app.use(express.json())

app.use("/", router)
module.exports = app