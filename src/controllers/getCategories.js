import { productsCategoriesCollection } from "../database/db.js";

const getCategories = async (req, res) => {
  try {
    const categories = await productsCategoriesCollection.find().toArray();

    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default getCategories;
