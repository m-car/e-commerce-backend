// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category 1 to many
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "category-product",
});

// Products belongToMany Tags (through ProductTag) many to many
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "product_tag",
});

//product is like location
//tag is like traveller
//trip is like product tag
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
