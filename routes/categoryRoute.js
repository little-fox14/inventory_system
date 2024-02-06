import  express  from "express";
import { requireSignIn,isAdmin } from "../middleware/authMiddlewaree.js";
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController,updateCategoryController } from "../controllers/categoryController.js";
const router=express.Router();

//Routes
router.post('/create-category',requireSignIn,isAdmin,createCategoryController)
//update category 
router.put("/update-category/:id",requireSignIn,isAdmin,updateCategoryController)
// get category
router.get("/get-category",categoryController)
//single controller
router.get("/single-category/:slug",singleCategoryController)

//delete category routes
router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategoryController)
export default router
