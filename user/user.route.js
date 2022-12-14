const router = require("express").Router();
const { checkToken } = require("../auth/token");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser
} = require("./user.controller");
router.get("/users",  getUsers);
router.post("/register", createUser);
router.get("/:id",  getUserByUserId);
router.post("/login", login);
router.patch("/:id",  updateUsers);
router.delete("/delete/:id", deleteUser);

module.exports = router;