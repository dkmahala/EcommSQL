const router = require("express").Router();
const { checkToken } = require("../auth/token");
const {
  createOrder,
 
  getOrderById,
  getOrders,
  updateOrder,
  deleteOrder
} = require("./order.controller");
router.get("/", checkToken, getOrders);
router.post("/createP", createOrder);
router.get("/:id",getOrderById);

router.patch("/", checkToken, updateOrder);
router.delete("/", checkToken, deleteOrder);

module.exports = router;