export const contactUsTemplate = `
  <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 2px 8px #0001;padding:32px;font-family:Arial,sans-serif;">
    
    <h2 style="color:#0f3d91;font-size:1.9rem;font-weight:bold;margin-bottom:12px;">
      📩 New Inquiry – Australian Sovereign College (AUSC)
    </h2>

    <div style="margin-bottom:18px;color:#374151;line-height:1.6;">
      A new contact form submission has been received via the official website of 
      <strong>Australian Sovereign College (AUSC)</strong>. 
      Please review the details below:
    </div>

    <div style="background:#eef4ff;border-left:5px solid #c81e1e;padding:18px;border-radius:8px;margin-bottom:18px;">
      
      <strong style="color:#0f3d91;font-size:1.05rem;">Enquiry Details:</strong>
      
      <ul style="margin:10px 0 0 16px;padding:0;color:#111827;line-height:1.7;">
        <li><strong>Full Name:</strong> {{name}}</li>
        <li><strong>Email Address:</strong> {{email}}</li>
        <li><strong>Contact Number:</strong> {{phone}}</li>
      </ul>

      <div style="margin-top:16px;">
        <strong style="color:#0f3d91;">Message Submitted:</strong>
        <div style="margin-top:8px;background:#ffffff;border:1px solid #fecaca;padding:14px;border-radius:6px;color:#374151;line-height:1.6;">
          {{message}}
        </div>
      </div>
    </div>

    <div style="color:#6b7280;font-size:0.95rem;margin-top:24px;line-height:1.6;">
      Kindly respond to this enquiry at <strong>{{email}}</strong> at your earliest convenience.<br><br>
      This is an automated notification from the official AUSC website.<br>
      <strong>Australian Sovereign College Administration</strong>
    </div>

  </div>
`;

export const agentApplicationTemplate = `
<div style="max-width:700px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 4px 12px #00000010;padding:32px;font-family:Arial,sans-serif;line-height:1.6;color:#1f2937;">

  <h2 style="color:#0f3d91;margin-bottom:10px;">
    New Education Agent Application
  </h2>

  <p style="margin-bottom:20px;">
    A new Education Agent application has been submitted to 
    <strong>Australian Sovereign College (AUSC)</strong>.
  </p>

  <!-- ================= BUSINESS INFO ================= -->
  <div style="background:#f1f5ff;border-left:5px solid #c81e1e;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Business Information</h3>

    <p><strong>Business Type:</strong> {{businessType}}</p>
    <p><strong>Legal Name:</strong> {{legalName}}</p>
    <p><strong>Trading Name:</strong> {{tradingName}}</p>
    <p><strong>Owner Name:</strong> {{ownerName}}</p>
    <p><strong>Place of Registration:</strong> {{placeOfRegistration}}</p>
    <p><strong>Date of Registration:</strong> {{dateOfRegistration}}</p>
    <p><strong>Business Number:</strong> {{businessNumber}}</p>
    <p><strong>MARA No:</strong> {{maraNo}}</p>
    <p><strong>QEAC No:</strong> {{qeacNo}}</p>
    <p><strong>Representing Countries:</strong> {{representingCountries}}</p>
  </div>

  <!-- ================= CONTACT INFO ================= -->
  <div style="background:#ffffff;border:1px solid #e5e7eb;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Contact Details</h3>

    <p><strong>CEO Name:</strong> {{ceoName}}</p>
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Mobile:</strong> {{mobile}}</p>
    <p><strong>Landline:</strong> {{landline}}</p>

    <p><strong>Contact Person:</strong> {{contactPerson}}</p>
    <p><strong>Contact Email:</strong> {{contactPersonEmail}}</p>
    <p><strong>Contact Mobile:</strong> {{contactPersonMobile}}</p>
    <p><strong>Contact Landline:</strong> {{contactPersonLandline}}</p>

    <p><strong>Head Office Address:</strong> {{headOfficeAddress}}</p>
    <p><strong>Website:</strong> {{website}}</p>
    <p><strong>Number of Branches:</strong> {{numberOfBranches}}</p>
    <p><strong>Branch Locations:</strong> {{locationOfBranches}}</p>
  </div>

  <!-- ================= STUDENT & MARKETING ================= -->
  <div style="background:#f9fafb;border:1px solid #e5e7eb;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Student & Marketing Information</h3>

    <p><strong>Courses Interested In:</strong> {{coursesInterrestedIn}}</p>
    <p><strong>Industrial Body:</strong> {{nameOfIndustrialBody}}</p>
    <p><strong>Year of Membership:</strong> {{yearOfMembership}}</p>
    <p><strong>Institution Name:</strong> {{institutionName}}</p>
    <p><strong>Year of Affiliation:</strong> {{yearOfAffiliation}}</p>
    <p><strong>Number of Students:</strong> {{numberOfStudents}}</p>
    <p><strong>First Year Intakes:</strong> {{firstYearIntakes}}</p>
    <p><strong>Student Support Type:</strong> {{sudentSupportType}}</p>
    <p><strong>Fees Description:</strong> {{feesChargeDescription}}</p>
    <p><strong>Additional Marketing Info:</strong> {{additionalInformationMarketing}}</p>
    <p><strong>Student Onboarding Purpose:</strong> {{studentOnBoardingPurpose}}</p>
  </div>

  <!-- ================= COMPLIANCE ================= -->
  <div style="background:#eef2ff;border:1px solid #c7d2fe;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Compliance & Declaration</h3>

    <p><strong>Standard 4 Compliance:</strong></p>
    <div style="background:#ffffff;padding:12px;border-radius:6px;border:1px solid #e5e7eb;">
      {{standardFourCompliance}}
    </div>

    <p style="margin-top:15px;"><strong>PIER Accreditation:</strong> {{pierAccreditation}}</p>
    <p><strong>ESOS Act Compliance:</strong> {{EsosAct}}</p>
    <p><strong>AUSC Marketing Compliance:</strong> {{auscMarketingCompliance}}</p>
    <p><strong>AUSC Marketing Material Agreement:</strong> {{auscMarketingMaterial}}</p>
  </div>

  <!-- ================= REFEREES ================= -->
  <div style="background:#fef2f2;border-left:5px solid #c81e1e;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Referee 1</h3>
    <p><strong>Name:</strong> {{refereeOne}}</p>
    <p><strong>Contact:</strong> {{refereeContactNumber}}</p>
    <p><strong>Organization:</strong> {{organization}}</p>
    <p><strong>Position:</strong> {{position}}</p>
    <p><strong>Email:</strong> {{refereeEmailAddress}}</p>

    <hr style="margin:20px 0;">

    <h3 style="color:#0f3d91;">Referee 2</h3>
    <p><strong>Name:</strong> {{refereeTwo}}</p>
    <p><strong>Contact:</strong> {{refereeTwoContactNumber}}</p>
    <p><strong>Organization:</strong> {{refereeTwoOrganization}}</p>
    <p><strong>Position:</strong> {{refereeTwoPosition}}</p>
    <p><strong>Email:</strong> {{refereeTwoEmailAddress}}</p>
  </div>

  <!-- ================= AUTHORIZED PERSON ================= -->
  <div style="background:#ecfdf5;border-left:5px solid #059669;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#065f46;">Authorized Person</h3>

    <p><strong>Name:</strong> {{authorizedPersonName}}</p>
    <p><strong>Position:</strong> {{authorizedPersonPosition}}</p>
    <p><strong>Signature:</strong> {{signature}}</p>
  </div>

  <p style="font-size:0.9rem;color:#6b7280;margin-top:30px;">
    This is an automated notification from the official AUSC website.
  </p>

  <p style="font-weight:bold;margin-top:10px;">
    Australian Sovereign College (AUSC)
  </p>

</div>
`;

export const studentApplicationTemplate = `
<div style="max-width:700px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 4px 12px #00000010;padding:32px;font-family:Arial,sans-serif;line-height:1.6;color:#1f2937;">

  <h2 style="color:#0f3d91;margin-bottom:10px;">
    New Student Application
  </h2>

  <p style="margin-bottom:20px;">
    A new Student Application has been submitted to 
    <strong>Australian Sovereign College (AUSC)</strong>.
  </p>

  <!-- ================= PERSONAL DETAILS ================= -->
  <div style="background:#f1f5ff;border-left:5px solid #c81e1e;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Personal Details</h3>

    <p><strong>Application Type:</strong> {{applicationType}}</p>
    <p><strong>Title:</strong> {{title}}</p>
    <p><strong>Given Name:</strong> {{givenName}}</p>
    <p><strong>Middle Name:</strong> {{middleName}}</p>
    <p><strong>Family Name:</strong> {{familyName}}</p>
    <p><strong>Date of Birth:</strong> {{dateOfBirth}}</p>
    <p><strong>Gender:</strong> {{gender}}</p>
    <p><strong>Country of Birth:</strong> {{countryOfBirth}}</p>
    <p><strong>City of Birth:</strong> {{cityOfBirth}}</p>
    <p><strong>Country of Citizenship:</strong> {{countryOfCitizenship}}</p>
  </div>

  <!-- ================= CONTACT DETAILS ================= -->
  <div style="background:#ffffff;border:1px solid #e5e7eb;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Contact Details</h3>

    <p><strong>Email:</strong> {{emailAddress}}</p>
    <p><strong>Alternate Email:</strong> {{alternateEmailAddress}}</p>
    <p><strong>Mobile:</strong> {{mobile}}</p>
    <p><strong>Home Phone:</strong> {{homePhone}}</p>

    <p><strong>Street Number:</strong> {{streetNumber}}</p>
    <p><strong>Street Name:</strong> {{streetName}}</p>
    <p><strong>City:</strong> {{city}}</p>
    <p><strong>State/Province:</strong> {{stateProvince}}</p>
    <p><strong>Postal Code:</strong> {{postalCode}}</p>
    <p><strong>Country:</strong> {{country}}</p>
  </div>

  <!-- ================= PASSPORT & VISA ================= -->
  <div style="background:#f9fafb;border:1px solid #e5e7eb;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Passport & Visa Details</h3>

    <p><strong>Passport Number:</strong> {{passportNumber}}</p>
    <p><strong>Visa Number:</strong> {{visaNumber}}</p>
    <p><strong>Current Location:</strong> {{currentLocation}}</p>
    <p><strong>Citizenship Status:</strong> {{austCitizenshipStatus}}</p>
  </div>

  <!-- ================= EDUCATION ================= -->
  <div style="background:#eef2ff;border:1px solid #c7d2fe;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Education Details</h3>

    <p><strong>Highest School Level:</strong> {{higheshtSchoolEducation}}</p>
    <p><strong>Year Completed:</strong> {{yearCompleted}}</p>
    <p><strong>Prior Education:</strong> {{priorEducation}}</p>
    <p><strong>USI:</strong> {{usi}}</p>
    <p><strong>Qualification Location:</strong> {{qualificationLocation}}</p>
    <p><strong>Intake Date:</strong> {{intakeDate}}</p>
    <p><strong>Applying for Credit Transfer:</strong> {{isApplyingForCreditTransfer}}</p>
    <p><strong>Applying for RPL:</strong> {{isApplyingForRecognitionOfRPL}}</p>
  </div>

  <!-- ================= ENGLISH PROFICIENCY ================= -->
  <div style="background:#fef2f2;border-left:5px solid #c81e1e;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">English Proficiency</h3>

    <p><strong>IELTS Score:</strong> {{ielts}}</p>
    <p><strong>Date of Test:</strong> {{dateOfTest}}</p>
    <p><strong>Speak English at Home:</strong> {{doSpeakEnglishAtHome}}</p>
    <p><strong>Require English Assistance:</strong> {{requireEnglishAssisance}}</p>
  </div>

  <!-- ================= OSHC ================= -->
  <div style="background:#ecfdf5;border-left:5px solid #059669;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#065f46;">OSHC Details</h3>

    <p><strong>OSHC Type:</strong> {{oshcType}}</p>
    <p><strong>Provider Name:</strong> {{oshcProviderName}}</p>
    <p><strong>Membership Number:</strong> {{oschMembershipNumber}}</p>
    <p><strong>Expiry Date:</strong> {{oschExpiryDate}}</p>
  </div>

  <!-- ================= EMERGENCY CONTACT ================= -->
  <div style="background:#f9fafb;border:1px solid #e5e7eb;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Emergency Contact</h3>

    <p><strong>Name:</strong> {{emergencyContactName}}</p>
    <p><strong>Relationship:</strong> {{emergencyRelationship}}</p>
    <p><strong>Phone:</strong> {{emergencyPhonNumber}}</p>
    <p><strong>Comments:</strong> {{emergencyContactComments}}</p>
  </div>

  <!-- ================= DECLARATION ================= -->
  <div style="background:#f1f5ff;border-left:5px solid #0f3d91;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Declaration</h3>

    <p><strong>Agree to be Contacted:</strong> {{agreeToBeContacted}}</p>
    <p><strong>Agree to Terms & Conditions:</strong> {{agreeTermsAndConditions}}</p>
    <p><strong>Full Name:</strong> {{fullName}}</p>
    <p><strong>Signature:</strong> {{signature}}</p>
  </div>

  <!-- ================= AGENT INFO ================= -->
  <div style="background:#ffffff;border:1px solid #e5e7eb;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Agent Information (If Applicable)</h3>

    <p><strong>Agent Name:</strong> {{agentName}}</p>
    <p><strong>Agent Email:</strong> {{agentEmail}}</p>
    <p><strong>Business Name:</strong> {{businessName}}</p>
    <p><strong>Student Type:</strong> {{studentType}}</p>
  </div>

  <p style="font-size:0.9rem;color:#6b7280;margin-top:30px;">
    This is an automated notification from the official AUSC website.
  </p>

  <p style="font-weight:bold;margin-top:10px;">
    Australian Sovereign College (AUSC)
  </p>

</div>
`;