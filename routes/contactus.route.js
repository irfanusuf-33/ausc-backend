import express from "express";
import { agentRegistrationForm, contactUs, getContactMessages, getAgentRegistrations } from "../controllers/contactus.controller.js";
import { upload } from "../lib/multer.lib.js";
import { isLoggedIn, hasAccess } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", contactUs);
router.post("/agent-registration", upload.fields([
    { name: "businessProfileFile", maxCount: 1 },
    { name: "registrationCertificate", maxCount: 1 },
    { name: "maraQeacCertificate", maxCount: 1 },
    { name: "formData", maxCount: 1 },
]), agentRegistrationForm);

router.get('/contacts', isLoggedIn, hasAccess('readAccess'), getContactMessages);
router.get('/agents', isLoggedIn, hasAccess('readAccess'), getAgentRegistrations);

export default router;