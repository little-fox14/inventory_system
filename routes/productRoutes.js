import express from "express";
import { brainTreePaymentControler, brainTreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController } from "../controllers/productController.js";
import { requireSignIn,isAdmin } from "../middleware/authMiddlewaree.js";
import formidable from "express-formidable";

const router = express.Router();

//routess
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
  
);
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
 updateProductController,
  
);
 router.get('/get-product',getProductController)

 router.get('/get-product/:slug',getSingleProductController);

 router.get('/product-photo/:pid', productPhotoController);
 router.delete('/delete-product/:pid',deleteProductController)

 //filter product
router.post("/product-filters", productFiltersController);
 
//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//gateway routes
router.get("/braintree/token",brainTreeTokenController)
//Payments

router.post("/braintree/payment",requireSignIn,brainTreePaymentControler)
export default router;