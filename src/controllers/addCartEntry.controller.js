import { ObjectId } from "mongodb";
import { fixedProductsCollection, cartsCollection } from "../database/db.js";

const addCartEntry = async (req, res) => {
  console.log("data", req.body);
  const productId = new ObjectId(req.body.productId);
  console.log("productId", productId);
  const userId = res.locals.userId;
  console.log("userId", userId);

  const cartEntryObj = {};

  try {
    const productObj = await fixedProductsCollection.findOne({
      _id: productId,
    });
    console.log("productObj", productObj);

    cartEntryObj.productName = productObj.productName;
    cartEntryObj.price = productObj.price;
    cartEntryObj.description = productObj.description;
    cartEntryObj.image = productObj.image;
    cartEntryObj.quantity = 1;
    cartEntryObj.userId = userId;

    await cartsCollection.insertOne(cartEntryObj);
    console.log("cartEntry", cartEntryObj);

    res.status(201).send(cartEntryObj);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default addCartEntry;
