import { Router } from "express";
import { logInUser, logOutUser, registerUser, refreshAccessToken } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middileware.js";

const router = Router()


router.route("/register").post(
   upload.fields([
      {
         name: "avatar",
         maxCount:1
      },
      {
         name:"coverImage",
         maxCount:1
      }
   ]),
   registerUser
)

router.route("/logIn").post(logInUser);

router.route("/logOut").post( verifyJWT ,logOutUser)
router.route("/refresh-token").post(refreshAccessToken)

export default router     