import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dbPassword = process.env.REACT_DB_PASSWORD;

export default async function conectaNaDb(){
    mongoose.connect(`mongodb+srv://yannieyshin:betty2207@pindamonhangabalover.dmcfp.mongodb.net/test?retryWrites=true&w=majority&appName=pindamonhangabalover
    `);

    return mongoose.connection;
}