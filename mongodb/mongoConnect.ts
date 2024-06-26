import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const DBname: string = process.env.DBNAME!;
const collecName: string = process.env.DBCOLLECTION!;
// const url: string =
//   process.env.NODE_ENV === "development"
//     ? "mongodb://127.0.0.1:27017/"
//     : process.env.DB_URL!;
const url: string = process.env.DB_URL!
let client: MongoClient;

export async function GetMongoClient() {
  try {
    if (!client) {
      client = new MongoClient(url);
      await client.connect();
      console.log("⚡️ DB connected");
    }
  } catch (e) {
    console.log(e);
  }

  return client;
}

export async function GetCollection(
  dbName: string = DBname,
  collectionName: string = collecName
) {
  const cli = await GetMongoClient();
  const db = await cli.db(dbName);
  return db.collection(collectionName);
}
