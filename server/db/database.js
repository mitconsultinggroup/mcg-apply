import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
}).catch(error => console.log(error.reason));

const User = require("./user.js");

export default { User };
