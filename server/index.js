import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.static("../client/index.js"));

// Helmet
app.use(
    helmet({
        contentSecurityPolicy: false,
        crossOriginEmbedderPolicy: false,
    })
);

// Body Parser
app.use(bodyParser.json());

// Cookie Parser
app.use(cookieParser());

// API
import api from "./api/api.js";
app.use("/api", api);

const port = process.env.PORT || 5000;

app.listen(port, () =>
    console.log(`Server started on port: 5000`)
);