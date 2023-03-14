import { Router } from "express";
import {
  login,
  preRegister,
  register,
  forgotPassword,
  accessAccount,
  refreshToken,
  currentUser,
} from "../controller/auth.js";
import { requireSignin } from "../middleware/auth.js";

const router = Router();

router.post("/", requireSignin, (req, res) => {
  res.send("auth.js");
});

// ================================================POST
router.post("/pre-register", preRegister);
router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/access-account", accessAccount);

// ================================================GET
router.get("/refresh-token", refreshToken);
router.get("/current-user", requireSignin, currentUser);

export default router;
