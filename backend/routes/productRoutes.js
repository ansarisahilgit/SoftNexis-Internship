const router = require("express").Router();
const productController = require("../controllers/productController");
const { validateProduct } = require("../middleware/validateProduct");
const protect = require("../middleware/authMiddleware");

router.post("/", protect, validateProduct, productController.createProduct);

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProductById);

router.put("/:id", protect, validateProduct, productController.updateProduct);

router.delete("/:id", protect, productController.deleteProduct);

module.exports = router;
