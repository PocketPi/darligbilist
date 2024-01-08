import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const server = express();

server.use(express.json());
server.use(cors());

const port = process.env.PORT || 4000;

server.get('/api', (req, res, next) => {
    res.json({ message: 'Hello, Express TypeScript!' });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});