import express from "express";
import cors from "cors";
import contact from "./Routes/contact.js";
import "./Connection/conn.js";
import dotenv from 'dotenv';
const { config } = dotenv;
config();

const server = express();

server.use(express.json());
server.use(cors());
server.use('/api/v1', contact);

const port = process.env.REACT_APP_PORT;

server.get("/", (req, res) => {
  res.send("Hello from server");
});

server.listen(port, () => {
  console.log(`Server started at ${port}`);
});