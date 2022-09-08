const router = require("express").Router();
const { checkToken } = require("../auth/token");
const {
  createProduct,
 
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct
} = require("./product.controller");
router.get("/", checkToken, getProducts);
router.post("/createP", createProduct);
router.get("/:id",getProductById);

router.patch("/", checkToken, updateProduct);
router.delete("/", checkToken, deleteProduct);

module.exports = router;