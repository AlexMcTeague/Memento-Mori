"use strict";

import express from "express";
import cors from "cors";

const app = express();
const port = 8081;
app.use(express.json());

// TODO: Configure corsOptions to only allow requests from the frontend
// const corsOptions = { origin: `http://localhost:${port}` }
const corsOptions = {  }
app.use(cors());
app.use(cors(corsOptions));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});