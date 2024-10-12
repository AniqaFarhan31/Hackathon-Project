function handleFormSubmit(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var school = document.getElementById('school').value;
    var startDateSchool = document.getElementById('start-date-school').value;
    var endDateSchool = document.getElementById('end-date-school').value;
    var college = document.getElementById('college').value;
    var startDateCollege = document.getElementById('start-date-college').value;
    var endDateCollege = document.getElementById('end-date-college').value;
    var degree = document.getElementById('degree').value;
    var startDateDegree = document.getElementById('start-date-degree').value;
    var endDateDegree = document.getElementById('end-date-degree').value;
    var experienceCompany1 = document.getElementById('company1').value;
    var experienceStartDate1 = document.getElementById('start-date-exp1').value;
    var experienceEndDate1 = document.getElementById('end-date-exp1').value;
    var experienceCompany2 = document.getElementById('company2').value;
    var experienceStartDate2 = document.getElementById('start-date-exp2').value;
    var experienceEndDate2 = document.getElementById('end-date-exp2').value;
    var resumeSummary = "\n <h2>Personal Information</h2>\n <p><strong>Name:</strong> ".concat(name, "</p>\n <p><strong>Address:</strong> ").concat(address, "</p>\n <p><strong>Email:</strong> ").concat(email, "</p>\n <p><strong>Contact:</strong> ").concat(contact, "</p>\n\n <h2>Education</h2>\n <p><strong>School:</strong> ").concat(school, " (").concat(startDateSchool, " - ").concat(endDateSchool, ")</p>\n <p><strong>College:</strong> ").concat(college, " (").concat(startDateCollege, " - ").concat(endDateCollege, "</p>\n <p><strong>Degree:</strong> ").concat(degree, " (").concat(startDateDegree, " - ").concat(endDateDegree, "</p>\n\n <h2>Experience</h2>\n <p><strong>Company Name:</strong> ").concat(experienceCompany1, " (").concat(experienceStartDate1, " - ").concat(experienceEndDate1, ")</p>\n <p><strong>Company Name:</strong> ").concat(experienceCompany2, " (").concat(experienceStartDate2, " - ").concat(experienceEndDate2, ")</p>\n\n ");
    var generatedResumeDiv = document.getElementById('generatedResume');
    generatedResumeDiv.innerHTML = resumeSummary;
    document.getElementById('resumeOutput').style.display = 'block';
}
var form = document.getElementById('resumeform');
form.addEventListener('submit', handleFormSubmit);
