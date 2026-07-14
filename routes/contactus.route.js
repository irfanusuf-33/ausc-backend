import express from "express";
import { agentRegistrationForm, contactUs, studentApplicationForm } from "../controllers/contactus.controller.js";
import { upload } from "../lib/multer.lib.js";

const router = express.Router();

router.post("/", contactUs);
router.post("/agent-registration", upload.fields([
    { name: "businessProfileFile", maxCount: 1 },
    { name: "registrationCertificate", maxCount: 1 },
    { name: "maraQeacCertificate", maxCount: 1 },
]), agentRegistrationForm);
router.post("/student-application", upload.fields([
    { name: "passport", maxCount: 1 },
    { name: "academicCertificate", maxCount: 1 },
    { name: "englishCertificate", maxCount: 1 },
    { name: "osid", maxCount: 1 },
    { name: "other", maxCount: 1 },
]), studentApplicationForm);

export default router;