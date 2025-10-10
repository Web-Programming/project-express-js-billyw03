const express = require("express");
const router = express.Router();
const products = require("../data/products.json");
var product = require("../models/products");

router.get("/all", async function (req, res, next) {
  try {
    const allProducts = await product.find(); //gunakan model 'product'
    //mengambil semua data produk
    res.render("index", {
      title: "Toko Online Sederhana",
      products: allProducts,
    });
  } catch (err) {
    res.status(500).send("gagal memmuat data produk");
  }
});

router.get("/:id", function (req, res, next) {
  const productId = parseInt(req.params.id); // tangkap ID dari URL
  const product = products.find((p) => p.id == productId);

  if (!product) {
    return res.status(404).send("produk tidak ditemukan");
  }

  res.render("product-detail", {
    title: product.name,
    product: product,
  });
});

// tambahan soal 3
router.get("/:productId/review/:reviewId", function (req, res, next) {
  const productId = parseInt(req.params.productId);
  const reviewId = parseInt(req.params.reviewId);

  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).send("Produk Tidak Ditemukan");
  }

  const review = {
    id: reviewId,
    content: `Ini adalah review ${reviewId} untuk produk ${productId}`,
  };

  res.render("review-detail", {
    title: `Ulasan ${reviewId} untuk Produk ${productId}`,
    product,
    review,
  });

  res.render("review-detail", {
    title: `Ulasan ${reviewId} untuk Produk ${productId}`,
    product,
    review,
  });
});

module.exports = router;
