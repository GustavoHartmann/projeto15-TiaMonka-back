import { collectionUsers } from "../database/db.js";
import { signUpSchema } from "../models/signUp.model.js";

export async function signUpValidation(req, res, next) {
  const { email } = req.body;

  const { error } = signUpSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((d) => d.message);
    return res.status(422).send(errors);
  }

  try {
    const emailInUse = await collectionUsers.findOne({ email });

    if (emailInUse) {
      return res.status(409).send({ message: "This email is already in use" });
    }
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }

  res.locals.user = req.body;

  next();
}
