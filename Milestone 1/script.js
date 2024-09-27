function handleFormSubmit(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var school = document.getElementById('school').value;
    var startDateSchool = document.getElementById('start-date').value;
    var endDateSchool = document.getElementById('end-date').value;
    var college = document.getElementById('college').value;
    var degree = document.getElementById('degree').value;
    var experienceCompany1 = document.getElementById('company name').value;
    var experienceStartDate1 = document.querySelector('input[name="start-date"]:nth-of-type(1)').value;
    var experienceEndDate1 = document.querySelector('input[name="end-date"]:nth-of-type(1)').value;
    var experienceCompany2 = document.querySelector('input[name="company name"]:nth-of-type(2)').value;
    var experienceStartDate2 = document.querySelector('input[name="start-date"]:nth-of-type(2)').value;
    var experienceEndDate2 = document.querySelector('input[name="end-date"]:nth-of-type(2)').value;
    var resumeSummary = "\n    <h2>Resume Summary</h2>\n    <h3>Personal Information</h3>\n    <p><strong>Name:</strong> ".concat(name, "</p>\n    <p><strong>Address:</strong> ").concat(address, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Contact:</strong> ").concat(contact, "</p>\n\n    <h3>Education</h3>\n    <p><strong>School:</strong> ").concat(school, " (").concat(startDateSchool, " to ").concat(endDateSchool, ")</p>\n    <p><strong>College:</strong> ").concat(college, "</p>\n    <p><strong>Degree:</strong> ").concat(degree, "</p>\n\n    <h3>Experience</h3>\n    <p><strong>Company Name:</strong> ").concat(experienceCompany1, " (").concat(experienceStartDate1, " to ").concat(experienceEndDate1, ")</p>\n    <p><strong>Company Name:</strong> ").concat(experienceCompany2, " (").concat(experienceStartDate2, " to ").concat(experienceEndDate2, ")</p>\n    ");
    var summaryDiv = document.createElement('div');
    summaryDiv.innerHTML = resumeSummary;
    document.body.appendChild(summaryDiv);
}
var form = document.getElementById('resumeform');
form.addEventListener('submit', handleFormSubmit);
