import EmailHelper from "../helpers/emailHelper.js";
import { contactUsTemplate, agentApplicationTemplate, studentApplicationTemplate } from "../templates/contactus.templates.js";

export const contactUs = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        if (!name || !email || !phone || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const html = EmailHelper.renderTemplate(contactUsTemplate, {
            name: name,
            email: email,
            phone: phone,
            message: message,
        });

        const emailHelper = new EmailHelper();
        await emailHelper.sendEmail({
            to: process.env.NODEMAILER_EMAIL_RECIEVER,
            subject: 'New contact message recieved',
            text: "You have received a new contact message from " + name,
            html: html
        });
        // Here you can add logic to save the contact message to a database or send an email
        res.status(200).json({ message: 'Contact message received successfully' });
    } catch (error) {
        console.log('error from the contact us controller: ', error);
        return res.status(500).json({ error: 'An error occurred while processing your request' });
    }
};

export const agentRegistrationForm = async (req, res) => {
    try {
        const {
            businessType,
            legalName,
            tradingName,
            ownerName,
            placeOfRegistration,
            dateOfRegistration,
            businessNumber,
            maraNo,
            qeacNo,
            representingCountries,
            ceoName,
            email,
            mobile,
            landline,
            contactPerson,
            contactPersonEmail,
            contactPersonMobile,
            contactPersonLandline,
            headOfficeAddress,
            website,
            numberOfBranches,
            locationOfBranches,
            coursesInterrestedIn,
            nameOfIndustrialBody,
            yearOfMembership,
            institutionName,
            yearOfAffiliation,
            numberOfStudents,
            firstYearIntakes,
            sudentSupportType,
            feesChargeDescription,
            additionalInformationMarketing,
            standardFourCompliance,
            pierAccreditation,
            EsosAct,
            studentOnBoardingPurpose,
            auscMarketingCompliance,
            auscMarketingMaterial,
            refereeOne,
            refereeContactNumber,
            organization,
            position,
            refereeEmailAddress,
            refereeTwo,
            refereeTwoContactNumber,
            refereeTwoOrganization,
            refereeTwoPosition,
            refereeTwoEmailAddress,
            authorizedPersonName,
            authorizedPersonPosition,
            signature,
        } = req.body;

        // Access uploaded files
        const businessProfileFile = req.files?.businessProfileFile?.[0];
        const registrationCertificate = req.files?.registrationCertificate?.[0];
        const maraQeacCertificate = req.files?.maraQeacCertificate?.[0];

        const html = EmailHelper.renderTemplate(agentApplicationTemplate, {
            businessType,
            legalName,
            tradingName,
            ownerName,
            placeOfRegistration,
            dateOfRegistration,
            businessNumber,
            maraNo,
            qeacNo,
            representingCountries,
            ceoName,
            email,
            mobile,
            landline,
            contactPerson,
            contactPersonEmail,
            contactPersonMobile,
            contactPersonLandline,
            headOfficeAddress,
            website,
            numberOfBranches,
            locationOfBranches,
            coursesInterrestedIn,
            nameOfIndustrialBody,
            yearOfMembership,
            institutionName,
            yearOfAffiliation,
            numberOfStudents,
            firstYearIntakes,
            sudentSupportType,
            feesChargeDescription,
            additionalInformationMarketing,
            standardFourCompliance,
            pierAccreditation,
            EsosAct,
            studentOnBoardingPurpose,
            auscMarketingCompliance,
            auscMarketingMaterial,
            refereeOne,
            refereeContactNumber,
            organization,
            position,
            refereeEmailAddress,
            refereeTwo,
            refereeTwoContactNumber,
            refereeTwoOrganization,
            refereeTwoPosition,
            refereeTwoEmailAddress,
            authorizedPersonName,
            authorizedPersonPosition,
            signature,
        });

        const attachments = [];

        if (businessProfileFile) {
            attachments.push({
                filename: businessProfileFile.originalname,
                content: businessProfileFile.buffer,
            });
        }

        if (registrationCertificate) {
            attachments.push({
                filename: registrationCertificate.originalname,
                content: registrationCertificate.buffer,
            });
        }

        if (maraQeacCertificate) {
            attachments.push({
                filename: maraQeacCertificate.originalname,
                content: maraQeacCertificate.buffer,
            });
        }

        const emailHelper = new EmailHelper();
        await emailHelper.sendEmail({
            to: process.env.NODEMAILER_EMAIL_RECIEVER_2,
            subject: "New AUSC Education Agent Application Received",
            text: `New agent application received from ${legalName}`,
            html: html,
            attachments
        });

        return res.status(200).json({
            success: true,
            message: "Application submitted successfully"
        });

    } catch (error) {
        console.log('error from the agent registration form controller: ', error);
        return res.status(500).json({ error: 'An error occurred while processing your request' });
    }
}

export const studentApplicationForm = async (req, res) => {

    try {
        const {
            hasPassport,
            hasCopiesOfAcademicOfHome,
            hasCopiesOfAcademicOfAustralia,
            hasCurrentCOE,
            hasQTEassessmentForm,
            hasCurriculumVitae,
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
            doSpeakEnglishAtHome,
            requireEnglishAssisance,
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
            isApplyingForCreditTransfer,
            isApplyingForRecognitionOfRPL,
            oshcType,
            oshcProviderName,
            oschMembershipNumber,
            oschExpiryDate,
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
            haveAttendedAUSCBefore,
            agreeToBeContacted,
            agreeTermsAndConditions,
            fullName,
            signature,
            agentName,
            agentEmail,
            businessName,
            studentType,
        } = req.body;

        const attachments = [];

        const passport = req.files?.passport?.[0];
        const academicCertificate = req.files?.academicCertificate?.[0];
        const englishCertificate = req.files?.englishCertificate?.[0];
        const osid = req.files?.osid?.[0];
        const other = req.files?.other?.[0];

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

        const html = EmailHelper.renderTemplate(studentApplicationTemplate, {
            hasPassport,
            hasCopiesOfAcademicOfHome,
            hasCopiesOfAcademicOfAustralia,
            hasCurrentCOE,
            hasQTEassessmentForm,
            hasCurriculumVitae,
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
            doSpeakEnglishAtHome,
            requireEnglishAssisance,
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
            isApplyingForCreditTransfer,
            isApplyingForRecognitionOfRPL,
            oshcType,
            oshcProviderName,
            oschMembershipNumber,
            oschExpiryDate,
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
            haveAttendedAUSCBefore,
            agreeToBeContacted,
            agreeTermsAndConditions,
            fullName,
            signature,
            agentName,
            agentEmail,
            businessName,
            studentType,
        });

        const emailHelper = new EmailHelper();
        await emailHelper.sendEmail({
            to: process.env.NODEMAILER_EMAIL_RECIEVER,
            subject: "New AUSC Education Student Application Received",
            text: `New student application received from ${givenName}`,
            html: html,
            attachments
        });

        return res.status(200).json({
            success: true,
            message: "Application submitted successfully"
        });
    } catch (error) {
        console.log('error from the student application form controller: ', error);
        return res.status(500).json({ error: 'An error occurred while processing your request' });
    }
}