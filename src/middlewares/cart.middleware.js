import { collectionSessions } from "../database/db.js";

const validateUser = async (req, res, next) => {
  const { authorization } = req.headers;

  const authToken = authorization?.replace("Bearer ", "");

  if (!authToken) {
    res.sendStatus(401);
    return;
  }

  let activeSession;

  try {
    activeSession = await collectionSessions.findOne({ token: authToken });

    if (!activeSession) {
      res.sendStatus(404);
      return;
    }
  } catch (error) {
    res.status(500).send(error);
  }

  res.locals.userId = activeSession.userId;
  next();
};

export default validateUser;
