import express from "express";
import { studentApplicationForm } from "../controllers/student.controller.js";
import { upload } from "../lib/multer.lib.js";

const router = express.Router();

router.post("/application", upload.fields([
    { name: "passport", maxCount: 1 },
    { name: "academicCertificate", maxCount: 1 },
    { name: "englishCertificate", maxCount: 1 },
    { name: "osid", maxCount: 1 },
    { name: "other", maxCount: 1 },
]), studentApplicationForm);

export default router;
