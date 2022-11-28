import { ObjectId } from "mongodb";
import { fixedProductsCollection } from "../database/db.js";

const getSingleProduct = async (req, res) => {
  const productId = req.params.productId;
  console.log(productId);

  try {
    const productObj = await fixedProductsCollection
      .find({ _id: new ObjectId(productId) })
      .toArray();

    res.status(200).send(productObj);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export default getSingleProduct;
