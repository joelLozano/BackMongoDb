import { Router } from "express";
import {
  loginview,
  createUser,
  login,
} from "../controllers/user_controller.mjs";
import { body } from "express-validator";

const router = Router();

router.post(
  "/createUser",
  [body("name").isLength({ min: 3 }),
  body("password").isLength({ min: 6 }),
  body('email').isEmail()
],
  createUser
);


router.get("/", loginview);
router.post("/login", login);

export default router;
