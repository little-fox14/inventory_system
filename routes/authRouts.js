import  express from "express";
import{registerController,loginController,testController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController, } from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middleware/authMiddlewaree.js";
const router=express.Router();
//routing ||post
router.post('/register',registerController);
//LOGIN ||POST
router.post('/login',loginController);
//forgot-password
router.post('/forgot-password',forgotPasswordController)


//protected routes
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})

//protected admin routes
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})

router.get('/test',requireSignIn,isAdmin,testController)

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders",requireSignIn,getOrdersController);

//all-orders
router.get("/all-orders",requireSignIn,isAdmin,getAllOrdersController);

// order status update
router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
  );
 export default router