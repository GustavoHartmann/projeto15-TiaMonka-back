import { ObjectId } from "mongodb";
import { cartsCollection } from "../database/db.js";

const changeEntryQuantity = async (req, res) => {
  const changeType = req.body.changeType;
  const entryId = new ObjectId(req.body.entryId);
  const previousQuantity = req.body.previousQuantity;

  let sumFactor;

  if (changeType === "increase") {
    sumFactor = 1;
  } else if (changeType === "decrease") {
    sumFactor = -1;
  }

  try {
    if (Number(previousQuantity) + sumFactor === 0) {
      await cartsCollection.deleteOne({ _id: entryId });
    }

    await cartsCollection.updateOne(
      { _id: entryId },
      { $set: { quantity: Number(previousQuantity) + sumFactor } }
    );

    res.sendStatus(201);
    return;
  } catch (error) {
    res.status(500).send(error);
    return;
  }
};

export default changeEntryQuantity;
