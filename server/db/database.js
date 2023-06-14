import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
}).catch(error => console.log(error));

import { User } from "./user.js";

export { User };
