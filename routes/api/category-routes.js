const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    // find all products
    const categoryData = await Category.findAll({
      // include: [
      //   {
      //     model: Product,
      //   },
      //   {
      //     model: Product,
      //     through: Category,
      //     as: "category-product",
      //   },
      // ],
    });
    res.status(200).json(categoryData);
    console.log("category get ok");
    // be sure to include its associated Category and Tag data
  } catch (error) {
    res.status(500).json(error);
  }
  // be sure to include its associated Products
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
