export const studentApplicationTemplate = `
<div style="max-width:750px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 4px 12px #00000010;padding:32px;font-family:Arial,sans-serif;line-height:1.6;color:#1f2937;">

  <h2 style="color:#0f3d91;margin-bottom:10px;">
    New Student Application Received
  </h2>

  <p style="margin-bottom:20px;">
    A new student application has been submitted to 
    <strong>Australian Sovereign College (AUSC)</strong>.
  </p>

  <!-- ================= APPLICATION TYPE ================= -->
  <div style="background:#f1f5ff;border-left:5px solid #c81e1e;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Application Details</h3>
    <p><strong>Application Type:</strong> {{applicationType}}</p>
    <p><strong>Student Type:</strong> {{studentType}}</p>
    <p><strong>Current Location:</strong> {{currentLocation}}</p>
  </div>

  <!-- ================= PERSONAL INFORMATION ================= -->
  <div style="background:#ffffff;border:1px solid #e5e7eb;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Personal Information</h3>
    
    <p><strong>Title:</strong> {{title}}</p>
    <p><strong>Given Name:</strong> {{givenName}}</p>
    <p><strong>Middle Name:</strong> {{middleName}}</p>
    <p><strong>Family Name:</strong> {{familyName}}</p>
    <p><strong>Date of Birth:</strong> {{dateOfBirth}}</p>
    <p><strong>Gender:</strong> {{gender}}</p>
    
    <p><strong>Country of Birth:</strong> {{countryOfBirth}}</p>
    <p><strong>City of Birth:</strong> {{cityOfBirth}}</p>
    <p><strong>Country of Citizenship:</strong> {{countryOfCitizenship}}</p>
    <p><strong>Australian Citizenship Status:</strong> {{austCitizenshipStatus}}</p>
    <p><strong>Aboriginal or Torres Strait Islander:</strong> {{aboriginalOrTorresStraitIslander}}</p>
  </div>

  <!-- ================= CONTACT INFORMATION ================= -->
  <div style="background:#f9fafb;border:1px solid #e5e7eb;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Contact Information</h3>
    
    <p><strong>Email:</strong> {{emailAddress}}</p>
    <p><strong>Alternate Email:</strong> {{alternateEmailAddress}}</p>
    <p><strong>Mobile:</strong> {{mobile}}</p>
    <p><strong>Home Phone:</strong> {{homePhone}}</p>
    
    <p><strong>Address:</strong><br>
    {{streetNumber}} {{streetName}}<br>
    {{city}}, {{stateProvince}} {{postalCode}}<br>
    {{country}}</p>
  </div>

  <!-- ================= EMERGENCY CONTACT ================= -->
  <div style="background:#fef2f2;border-left:5px solid #c81e1e;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Emergency Contact</h3>
    
    <p><strong>Name:</strong> {{emergencyContactName}}</p>
    <p><strong>Relationship:</strong> {{emergencyRelationship}}</p>
    <p><strong>Phone:</strong> {{emergencyPhonNumber}}</p>
    <p><strong>Comments:</strong> {{emergencyContactComments}}</p>
  </div>

  <!-- ================= VISA & PASSPORT ================= -->
  <div style="background:#eef2ff;border:1px solid #c7d2fe;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Visa & Passport Information</h3>
    
    <p><strong>Passport Number:</strong> {{passportNumber}}</p>
    <p><strong>Visa Number:</strong> {{visaNumber}}</p>
  </div>

  <!-- ================= ENGLISH PROFICIENCY ================= -->
  <div style="background:#f0fdf4;border:1px solid #bbf7d0;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#065f46;">English Proficiency</h3>
    
    <p><strong>IELTS Score:</strong> {{ielts}}</p>
    <p><strong>Date of Test:</strong> {{dateOfTest}}</p>
    <p><strong>Speak English at Home:</strong> {{doSpeakEnglishAtHome}}</p>
    <p><strong>Require English Assistance:</strong> {{requireEnglishAssisance}}</p>
  </div>

  <!-- ================= EDUCATION ================= -->
  <div style="background:#fffbeb;border:1px solid #fde68a;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#92400e;">Education Background</h3>
    
    <p><strong>Highest School Education:</strong> {{higheshtSchoolEducation}}</p>
    <p><strong>Year Completed:</strong> {{yearCompleted}}</p>
    <p><strong>Prior Education:</strong> {{priorEducation}}</p>
    <p><strong>USI:</strong> {{usi}}</p>
  </div>

  <!-- ================= COURSE INFORMATION ================= -->
  <div style="background:#f1f5ff;border-left:5px solid #0f3d91;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Course Information</h3>
    
    <p><strong>Qualification Location:</strong> {{qualificationLocation}}</p>
    <p><strong>Intake Date:</strong> {{intakeDate}}</p>
    <p><strong>Applying for Credit Transfer:</strong> {{isApplyingForCreditTransfer}}</p>
    <p><strong>Applying for RPL:</strong> {{isApplyingForRecognitionOfRPL}}</p>
  </div>

  <!-- ================= OSHC INFORMATION ================= -->
  <div style="background:#fef3c7;border:1px solid #fbbf24;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#92400e;">OSHC Information</h3>
    
    <p><strong>OSHC Type:</strong> {{oshcType}}</p>
    <p><strong>Provider Name:</strong> {{oshcProviderName}}</p>
    <p><strong>Membership Number:</strong> {{oschMembershipNumber}}</p>
    <p><strong>Expiry Date:</strong> {{oschExpiryDate}}</p>
  </div>

  <!-- ================= LANGUAGE & LITERACY ASSESSMENT ================= -->
  <div style="background:#f5f3ff;border:1px solid #ddd6fe;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#5b21b6;">Language & Literacy Assessment</h3>
    
    <p><strong>I can:</strong> {{iCan}} (First Language: {{isMyFirstLang}})</p>
    <p><strong>Read time on clock:</strong> {{canReadTimeOnClock}} (First Language: {{isMyFirstlang2}})</p>
    <p><strong>Add up things:</strong> {{canAddUpThings}} (First Language: {{isMyFirstLang3}})</p>
    <p><strong>Know how much change:</strong> {{canKnowHowMuchChange}} (First Language: {{isMyFirstLang4}})</p>
    <p><strong>Use phone:</strong> {{canUsePhone}} (First Language: {{isMyFirstLang5}})</p>
    <p><strong>Take phone message:</strong> {{canTakePhoneMessage}} (First Language: {{isMyFirstLang6}})</p>
    <p><strong>Fill a form/timesheet:</strong> {{canFillAFormForTimesheet}} (First Language: {{isMyFirstLang7}})</p>
    <p><strong>Follow instructions:</strong> {{canFollowInstructions}} (First Language: {{isMyFirstLang8}})</p>
  </div>

  <!-- ================= ADDITIONAL INFORMATION ================= -->
  <div style="background:#f9fafb;border:1px solid #e5e7eb;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#0f3d91;">Additional Information</h3>
    
    <p><strong>Employment Status:</strong> {{employmentStatus}}</p>
    <p><strong>Disabilities:</strong> {{disabilities}}</p>
    <p><strong>Previously Attended AUSC:</strong> {{haveAttendedAUSCBefore}}</p>
  </div>

  <!-- ================= DOCUMENT CHECKLIST ================= -->
  <div style="background:#ecfdf5;border-left:5px solid #059669;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#065f46;">Document Checklist</h3>
    
    <p><strong>Passport:</strong> {{hasPassport}}</p>
    <p><strong>Academic Certificates (Home Country):</strong> {{hasCopiesOfAcademicOfHome}}</p>
    <p><strong>Academic Certificates (Australia):</strong> {{hasCopiesOfAcademicOfAustralia}}</p>
    <p><strong>Current COE:</strong> {{hasCurrentCOE}}</p>
    <p><strong>QTE Assessment Form:</strong> {{hasQTEassessmentForm}}</p>
    <p><strong>Curriculum Vitae:</strong> {{hasCurriculumVitae}}</p>
    <p><strong>References:</strong> {{references}}</p>
  </div>

  <!-- ================= AGENT INFORMATION ================= -->
  <div style="background:#fef2f2;border:1px solid #fecaca;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#991b1b;">Agent Information</h3>
    
    <p><strong>Agent Name:</strong> {{agentName}}</p>
    <p><strong>Agent Email:</strong> {{agentEmail}}</p>
    <p><strong>Business Name:</strong> {{businessName}}</p>
  </div>

  <!-- ================= AGREEMENTS ================= -->
  <div style="background:#dbeafe;border-left:5px solid #3b82f6;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#1e40af;">Agreements & Consent</h3>
    
    <p><strong>Agree to be Contacted:</strong> {{agreeToBeContacted}}</p>
    <p><strong>Agree to Terms & Conditions:</strong> {{agreeTermsAndConditions}}</p>
  </div>

  <!-- ================= SIGNATURE ================= -->
  <div style="background:#f3f4f6;border:1px solid #d1d5db;padding:20px;border-radius:8px;margin-bottom:20px;">
    <h3 style="margin-top:0;color:#374151;">Signature</h3>
    
    <p><strong>Full Name:</strong> {{fullName}}</p>
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
