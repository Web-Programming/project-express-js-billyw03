const express = require("express");
const router = express.Router();
const orderController = require("../../controllers/order");
const auth = require("../middleware/authMiddleware");

// POST - Create
router.post("/", auth.adminOnly, orderController.create);

// GET - All orders
router.get("/", orderController.apiall);

// GET - Detail
router.get("/:id", orderController.detailorder);

// PUT - Update
router.put("/:id", auth.adminOnly, orderController.update);

// DELETE - Remove
router.delete("/:id", orderController.remove);

module.exports = router;
