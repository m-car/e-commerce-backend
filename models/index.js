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
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag) many to many
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
    onDelete: "CASCADE",
  },
});
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
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
