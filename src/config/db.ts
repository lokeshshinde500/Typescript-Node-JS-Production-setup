import mongoose from "mongoose";
import env from "@config/env";

const db = async () => {
  await mongoose
    .connect(env.DB_URL!)
    .then(() => {
      console.log("DB connected :)");
    })
    .catch((err) => {
      console.error("DB not connected :(", err.message);
    });
};

export default db;
