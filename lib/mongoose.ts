import mongoose from "mongoose";

let isConnected = false; // check if mongoose is connected

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL NOT FOUND");
  if (isConnected) console.log("ALREADY CONNECTED TO MONGODB");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};