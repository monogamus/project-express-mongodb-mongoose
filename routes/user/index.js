var express = require("express");
var router = express.Router();

const {
  addUser,
  getUserById,
  getAllUser,
  deleteUser,
  updateUser
} = require("./controller");

router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
