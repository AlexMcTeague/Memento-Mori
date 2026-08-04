"use strict";

import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// Read port from environment variables
dotenv.config({ path: path.resolve(process.cwd(), "../.env") });
const port = process.env.BACKEND_PORT || 8080;

// Configure Express
const app = express();
app.use(express.json());

// Configure CORS
const frontendPort = process.env.FRONTEND_PORT || 5173;
const corsOptions = { origin: `http://localhost:${frontendPort}` }
app.use(cors(corsOptions));

// Read/write data to storage file
const STORAGE_PATH = path.resolve(process.cwd(), "./data/storage.json");
const readData = () => {
    if (!fs.existsSync(STORAGE_PATH)) {
        return [];
    }
    const rawData = fs.readFileSync(STORAGE_PATH);
    return JSON.parse(rawData.toString());
}
const writeData = (data: any) => {
    fs.writeFileSync(STORAGE_PATH, JSON.stringify(data, null, 2));
}

// API Endpoints
// POST
app.post("/api/items", (req, res) => {
    try {
        const data = readData();
        const newItem = {
            id: Date.now().toString(), // Unique ID based on timestamp
            createdAt: new Date().toISOString(),
            body: req.body
        };
        data.push(newItem);
        writeData(data);
        res.status(201).json(newItem);
    } catch (error) {
        console.error("Error writing to storage:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});