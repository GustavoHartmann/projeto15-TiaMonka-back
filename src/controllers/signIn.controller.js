import { v4 as uuid } from "uuid";
import { collectionSessions, collectionUsers } from "../database/db.js";

export async function signIn(req, res) {
  const email = res.locals.user;

  const token = uuid();

  try {
    const user = await collectionUsers.findOne({ email });

    const session = await collectionSessions.findOne({ userId: user._id });

    if (session) {
      await collectionSessions.deleteOne({ userId: user._id });
    }

    await collectionSessions.insertOne({
      token,
      userId: user._id,
    });

    res.send({ token });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
