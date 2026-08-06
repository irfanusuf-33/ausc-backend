import express from "express";
import { agentRegistrationForm, contactUs } from "../controllers/contactus.controller.js";
import { upload } from "../lib/multer.lib.js";

const router = express.Router();

router.post("/", contactUs);
router.post("/agent-registration", upload.fields([
    { name: "businessProfileFile", maxCount: 1 },
    { name: "registrationCertificate", maxCount: 1 },
    { name: "maraQeacCertificate", maxCount: 1 },
]), agentRegistrationForm);

export default router;