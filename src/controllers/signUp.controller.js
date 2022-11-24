import bcrypt from "bcrypt";
import { collectionUsers } from "../database/db.js";

export async function signUp(req, res) {
  const { name, email, password, address } = res.locals.user;
  const passwordHash = bcrypt.hashSync(password, 10);
  const user = {
    name,
    email,
    password: passwordHash,
    address,
  };

  try {
    await collectionUsers.insertOne(user);

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
