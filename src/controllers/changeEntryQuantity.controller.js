import { ObjectId } from "mongodb";
import { cartsCollection } from "../database/db.js";

const changeEntryQuantity = async (req, res) => {
  const changeType = req.body.changeType;
  const entryId = new ObjectId(req.body.entryId);
  console.log(changeType);
  console.log(entryId);
  let sumFactor;

  if (changeType === "increase") {
    sumFactor = 1;
  } else if (changeType === "decrease") {
    sumFactor = -1;
  }

  try {
    const selectedEntry = await cartsCollection.findOne({ _id: entryId });

    if (Number(selectedEntry.quantity) + sumFactor === 0) {
      await cartsCollection.deleteOne({ _id: entryId });
    }

    await cartsCollection.updateOne(
      { _id: entryId },
      { $set: { quantity: Number(selectedEntry.quantity) + sumFactor } }
    );
    res.sendStatus(201);
    return;
  } catch (error) {
    res.status(500).send(error);
    return;
  }
};

export default changeEntryQuantity;
