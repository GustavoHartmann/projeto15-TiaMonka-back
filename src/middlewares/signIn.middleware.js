import { collectionUsers } from "../database/db.js";
import { signInSchema } from "../models/signIn.model.js";
import bcrypt from "bcrypt";

export async function signInValidation(req, res, next) {
  const { email, password } = req.body;

  const { error } = signInSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((d) => d.message);
    return res.status(422).send(errors);
  }

  try {
    const user = await collectionUsers.findOne({ email });
    const correctPassword = bcrypt.compareSync(password, user.password);

    if (!user || !correctPassword) {
      return res
        .status(401)
        .send({ message: "Email address or password is incorrect" });
    }
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }

  res.locals.user = email;

  next();
}
