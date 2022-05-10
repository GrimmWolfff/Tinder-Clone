import { connectToDatabase } from "../../../utils/mongodb";
import { ObjectId } from "mongodb";
export default async function handler(req, res) {
    const { db } = await connectToDatabase();
    const { query: { id }, method, body: { username } } = req;
    switch (method) {
        case "PUT":
            const updatedUser = await db.collection('users').updateOne({ _id: ObjectId(id) }, { $set: { username: username } })
            res.json(updatedUser);
            break;
        case "GET":
            const user = await db.collection('users').findOne({ _id: ObjectId(id) })
            res.json(user);
            break;
    }
}