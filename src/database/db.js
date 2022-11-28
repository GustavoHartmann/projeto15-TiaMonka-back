import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log("MongoDB server connected!");
} catch (error) {
  console.log("MongoDB server ERROR: ", error);
}

const db = mongoClient.db("tiaMonkaDB");

export const collectionUsers = db.collection("users");
export const fixedProductsCollection = db.collection("fixedProducts");
export const productsCategoriesCollection = db.collection("productsCategories");
export const collectionSessions = db.collection("sessions");
export const cartsCollection = db.collection("carts");
