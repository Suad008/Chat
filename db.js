import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const client = new MongoClient(process.env.MONGODB_URI);

export async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("Error connecting to MongoDb", error);
  }
}

export function getCollection(name) {
  return client.db().collection(name);
}
