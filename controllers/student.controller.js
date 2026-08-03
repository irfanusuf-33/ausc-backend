import EmailHelper from "../helpers/emailHelper.js";
import { studentApplicationTemplate } from "../templates/student.templates.js";

export const studentApplicationForm = async (req, res) => {
    console.log('Received student application form submission');
    try {
        // Access uploaded files
        const passport = req.files?.passport?.[0];
        const academicCertificate = req.files?.academicCertificate?.[0];
        const englishCertificate = req.files?.englishCertificate?.[0];
        const osid = req.files?.osid?.[0];
        const other = req.files?.other?.[0];
        const formData = req.files?.formData?.[0];

        // Render email template
        const html = EmailHelper.renderTemplate(studentApplicationTemplate, {});

        // Prepare attachments
        const attachments = [];

        if (passport) {
            attachments.push({
                filename: passport.originalname,
                content: passport.buffer,
            });
        }

        if (academicCertificate) {
            attachments.push({
                filename: academicCertificate.originalname,
                content: academicCertificate.buffer,
            });
        }

        if (englishCertificate) {
            attachments.push({
                filename: englishCertificate.originalname,
                content: englishCertificate.buffer,
            });
        }

        if (osid) {
            attachments.push({
                filename: osid.originalname,
                content: osid.buffer,
            });
        }

        if (other) {
            attachments.push({
                filename: other.originalname,
                content: other.buffer,
            });
        }

        if (formData) {
            attachments.push({
                filename: formData.originalname,
                content: formData.buffer,
            });
        }

        // Send email
        const emailHelper = new EmailHelper();
        await emailHelper.sendEmail({
            to: process.env.NODEMAILER_EMAIL_RECIEVER_2,
            subject: `New Student Application`,
            text: `New student application received`,
            html: html,
            attachments
        });

        return res.status(200).json({
            success: true,
            message: "Application submitted successfully"
        });

    } catch (error) {
        console.log('Error from student application controller:', error);
        return res.status(500).json({
            success: false,
            error: 'An error occurred while processing your application'
        });
    }
};
