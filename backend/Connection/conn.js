import mongoose from "mongoose";
import { config } from "dotenv";
config();

const dbConnectionUrl = process.env.DB_CONNECTION_URL;

const conn = async () => {
    try {
        await mongoose.connect(dbConnectionUrl);
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

conn();
