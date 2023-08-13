import {MongoClient} from "mongodb";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      const client = await MongoClient.connect("mongodb+srv://developer:developer@cluster0.hjqnpqa.mongodb.net/meetups?retryWrites=true&w=majority");
      const db = client.db();

      const meetups = db.collection("meetups");
      const result = await meetups.insertOne(data);

      console.log(`result: ${result}`);

      await client.close();
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }

    res.status(201).json({message: "Meetup inserted!"});
  }
}
