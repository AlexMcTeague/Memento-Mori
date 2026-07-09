"use strict";

import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), "../.env") });
const port = process.env.BACKEND_PORT || 8080;

const app = express();
app.use(express.json());

// TODO: Configure corsOptions to only allow requests from the frontend (temporarily disabled during development)
// const corsOptions = { origin: `http://localhost:${process.env.FRONTEND_PORT}` }
const corsOptions = {  }
app.use(cors());
app.use(cors(corsOptions));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});