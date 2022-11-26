import { fixedProductsCollection } from "../database/db.js";

const getProductsByCategory = async (req, res) => {
  const productCategory = req.params.category;

  try {
    const ProductsByCategory = await fixedProductsCollection
      .find({ categoryRoute: productCategory })
      .toArray();

    res.status(200).send(ProductsByCategory);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default getProductsByCategory;
