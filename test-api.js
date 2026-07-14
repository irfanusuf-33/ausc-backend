/**
 * Simple API Test Script
 * Run with: node test-api.js
 */

const testContactUs = async () => {
    try {
        const response = await fetch('http://localhost:9002/api/contactus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'Test User',
                email: 'test@example.com',
                phone: '+61400000000',
                message: 'This is a test message from the API test script'
            })
        });

        const data = await response.json();
        console.log('✅ Contact Us Test:', data);
    } catch (error) {
        console.error('❌ Contact Us Test Failed:', error.message);
    }
};

const testStudentApplication = async () => {
    try {
        const formData = new FormData();
        
        // Add minimal required fields
        formData.append('givenName', 'John');
        formData.append('familyName', 'Doe');
        formData.append('emailAddress', 'john.doe@example.com');
        formData.append('mobile', '+61400000000');
        formData.append('dateOfBirth', '1995-01-15');
        formData.append('applicationType', 'New Student');
        formData.append('studentType', 'International');
        formData.append('currentLocation', 'Australia');
        formData.append('agreeTermsAndConditions', 'true');
        formData.append('fullName', 'John Doe');
        formData.append('signature', 'John Doe');

        const response = await fetch('http://localhost:9002/api/student/application', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        console.log('✅ Student Application Test:', data);
    } catch (error) {
        console.error('❌ Student Application Test Failed:', error.message);
    }
};

const testHealth = async () => {
    try {
        const response = await fetch('http://localhost:9002/api/health');
        const data = await response.json();
        console.log('✅ Health Check:', data);
    } catch (error) {
        console.error('❌ Health Check Failed:', error.message);
    }
};

// Run tests
console.log('🧪 Starting API Tests...\n');

(async () => {
    await testHealth();
    console.log('');
    await testContactUs();
    console.log('');
    await testStudentApplication();
    console.log('\n✨ Tests completed!');
})();
