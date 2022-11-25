import { fixedProducts } from "../database/db.js";

const getFixedProductsData = async (req, res) => {
  const productCategory = req.params.category;

  try {
    const allFixedProductsByCategory = await fixedProducts
      .find({ categoryRoute: productCategory })
      .toArray();

    res.status(200).send(allFixedProductsByCategory);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default getFixedProductsData;
