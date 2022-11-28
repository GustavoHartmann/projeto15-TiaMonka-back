import { cartsCollection } from "../database/db.js";

const getCartData = async (req, res) => {
  const userId = res.locals.userId;
  console.log("userId", userId);

  try {
    const userCart = await cartsCollection.find({ userId: userId }).toArray();
    console.log(userCart);
    res.status(200).send(userCart);
    return;
  } catch (error) {
    res.status(500).send(error);
    return;
  }
};

export default getCartData;
