import EmailHelper from "../helpers/emailHelper.js";
import { studentApplicationTemplate } from "../templates/student.templates.js";

export const studentApplicationForm = async (req, res) => {
    console.log('Received student application form submission');
    try {
        const {
            // Document checklist
            hasPassport,
            hasCopiesOfAcademicOfHome,
            hasCopiesOfAcademicOfAustralia,
            hasCurrentCOE,
            hasQTEassessmentForm,
            hasCurriculumVitae,
            references,
            currentLocation,
            applicationType,
            
            // Personal Information
            title,
            givenName,
            middleName,
            familyName,
            dateOfBirth,
            emailAddress,
            mobile,
            homePhone,
            
            // Address
            streetNumber,
            streetName,
            city,
            stateProvince,
            postalCode,
            country,
            
            // Citizenship & Visa
            countryOfCitizenship,
            passportNumber,
            visaNumber,
            
            // English Proficiency
            ielts,
            dateOfTest,
            
            // Additional Personal Info
            gender,
            countryOfBirth,
            cityOfBirth,
            austCitizenshipStatus,
            aboriginalOrTorresStraitIslander,
            employmentStatus,
            doSpeakEnglishAtHome,
            requireEnglishAssisance,
            higheshtSchoolEducation,
            yearCompleted,
            disabilities,
            priorEducation,
            
            // Contact & Emergency
            alternateEmailAddress,
            usi,
            emergencyContactName,
            emergencyRelationship,
            emergencyPhonNumber,
            emergencyContactComments,
            
            // Course Information
            qualificationLocation,
            intakeDate,
            isApplyingForCreditTransfer,
            isApplyingForRecognitionOfRPL,
            
            // OSHC Information
            oshcType,
            oshcProviderName,
            oschMembershipNumber,
            oschExpiryDate,
            
            // Language & Literacy Assessment
            iCan,
            isMyFirstLang,
            canReadTimeOnClock,
            isMyFirstlang2,
            canAddUpThings,
            isMyFirstLang3,
            canKnowHowMuchChange,
            isMyFirstLang4,
            canUsePhone,
            isMyFirstLang5,
            canTakePhoneMessage,
            isMyFirstLang6,
            canFillAFormForTimesheet,
            isMyFirstLang7,
            canFollowInstructions,
            isMyFirstLang8,
            
            // Previous Attendance & Agreements
            haveAttendedAUSCBefore,
            agreeToBeContacted,
            agreeTermsAndConditions,
            
            // Signature
            fullName,
            signature,
            
            // Agent Information
            agentName,
            agentEmail,
            businessName,
            studentType,
        } = req.body;

        // Access uploaded files
        const passport = req.files?.passport?.[0];
        const academicCertificate = req.files?.academicCertificate?.[0];
        const englishCertificate = req.files?.englishCertificate?.[0];
        const osid = req.files?.osid?.[0];
        const other = req.files?.other?.[0];

        // Render email template
        const html = EmailHelper.renderTemplate(studentApplicationTemplate, {
            hasPassport: hasPassport ? 'Yes' : 'No',
            hasCopiesOfAcademicOfHome: hasCopiesOfAcademicOfHome ? 'Yes' : 'No',
            hasCopiesOfAcademicOfAustralia: hasCopiesOfAcademicOfAustralia ? 'Yes' : 'No',
            hasCurrentCOE: hasCurrentCOE ? 'Yes' : 'No',
            hasQTEassessmentForm: hasQTEassessmentForm ? 'Yes' : 'No',
            hasCurriculumVitae: hasCurriculumVitae ? 'Yes' : 'No',
            references,
            currentLocation,
            applicationType,
            title,
            givenName,
            middleName,
            familyName,
            dateOfBirth,
            emailAddress,
            mobile,
            homePhone,
            streetNumber,
            streetName,
            city,
            stateProvince,
            postalCode,
            country,
            countryOfCitizenship,
            passportNumber,
            visaNumber,
            ielts,
            dateOfTest,
            gender,
            countryOfBirth,
            cityOfBirth,
            austCitizenshipStatus,
            aboriginalOrTorresStraitIslander,
            employmentStatus,
            doSpeakEnglishAtHome: doSpeakEnglishAtHome ? 'Yes' : 'No',
            requireEnglishAssisance: requireEnglishAssisance ? 'Yes' : 'No',
            higheshtSchoolEducation,
            yearCompleted,
            disabilities,
            priorEducation,
            alternateEmailAddress,
            usi,
            emergencyContactName,
            emergencyRelationship,
            emergencyPhonNumber,
            emergencyContactComments,
            qualificationLocation,
            intakeDate,
            isApplyingForCreditTransfer: isApplyingForCreditTransfer ? 'Yes' : 'No',
            isApplyingForRecognitionOfRPL: isApplyingForRecognitionOfRPL ? 'Yes' : 'No',
            oshcType,
            oshcProviderName,
            oschMembershipNumber,
            oschExpiryDate,
            iCan,
            isMyFirstLang: isMyFirstLang ? 'Yes' : 'No',
            canReadTimeOnClock,
            isMyFirstlang2: isMyFirstlang2 ? 'Yes' : 'No',
            canAddUpThings,
            isMyFirstLang3: isMyFirstLang3 ? 'Yes' : 'No',
            canKnowHowMuchChange,
            isMyFirstLang4: isMyFirstLang4 ? 'Yes' : 'No',
            canUsePhone,
            isMyFirstLang5: isMyFirstLang5 ? 'Yes' : 'No',
            canTakePhoneMessage,
            isMyFirstLang6: isMyFirstLang6 ? 'Yes' : 'No',
            canFillAFormForTimesheet,
            isMyFirstLang7: isMyFirstLang7 ? 'Yes' : 'No',
            canFollowInstructions,
            isMyFirstLang8: isMyFirstLang8 ? 'Yes' : 'No',
            haveAttendedAUSCBefore: haveAttendedAUSCBefore ? 'Yes' : 'No',
            agreeToBeContacted: agreeToBeContacted ? 'Yes' : 'No',
            agreeTermsAndConditions: agreeTermsAndConditions ? 'Yes' : 'No',
            fullName,
            signature,
            agentName: agentName || 'N/A',
            agentEmail: agentEmail || 'N/A',
            businessName: businessName || 'N/A',
            studentType: studentType || 'Direct Application',
        });

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

        // Send email
        const emailHelper = new EmailHelper();
        await emailHelper.sendEmail({
            to: process.env.NODEMAILER_EMAIL_RECIEVER,
            subject: `New Student Application - ${givenName} ${familyName}`,
            text: `New student application received from ${givenName} ${familyName}`,
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
