import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
let dbClient;
try {
  if (!process.env.MONGODB_URI) {
    throw new Error();
  }
  dbClient = new MongoClient(uri);
  dbClient.connect();
} catch (error) {}
export default dbClient as MongoClient;

/* const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to .env.local");
}
let globalWithMongo = global as typeof globalThis & {
  _mongoClient?: MongoClient;
};
if (process.env.NODE_ENV === "development") {
  if (!globalWithMongo) {
    client = new MongoClient(uri, options);
    globalWithMongo = client.connect();
  }
  client = globalWithMongo._mongoClient;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default client; */
