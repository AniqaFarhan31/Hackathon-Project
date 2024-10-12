function handleFormSubmit(event: Event): void {
 event.preventDefault();

 const name = (document.getElementById('name') as HTMLInputElement).value;
 const address = (document.getElementById('address') as HTMLInputElement).value;
 const email = (document.getElementById('email') as HTMLInputElement).value;
 const contact = (document.getElementById('contact') as HTMLInputElement).value;

 const school = (document.getElementById('school') as HTMLInputElement).value;
 const startDateSchool = (document.getElementById('start-date-school') as HTMLInputElement).value;
 const endDateSchool = (document.getElementById('end-date-school') as HTMLInputElement).value;

 const college = (document.getElementById('college') as HTMLInputElement).value;
 const startDateCollege = (document.getElementById('start-date-college') as HTMLInputElement).value;
 const endDateCollege = (document.getElementById('end-date-college') as HTMLInputElement).value;

 const degree = (document.getElementById('degree') as HTMLInputElement).value;
 const startDateDegree = (document.getElementById('start-date-degree') as HTMLInputElement).value;
 const endDateDegree = (document.getElementById('end-date-degree') as HTMLInputElement).value;

 const experienceCompany1 = (document.getElementById('company1') as HTMLInputElement).value;
 const experienceStartDate1 = (document.getElementById('start-date-exp1') as HTMLInputElement).value;
 const experienceEndDate1 = (document.getElementById('end-date-exp1') as HTMLInputElement).value;

 const experienceCompany2 = (document.getElementById('company2') as HTMLInputElement).value;
 const experienceStartDate2 = (document.getElementById('start-date-exp2') as HTMLInputElement).value;
 const experienceEndDate2 = (document.getElementById('end-date-exp2') as HTMLInputElement).value;

 const resumeSummary = `
 <h2>Personal Information</h2>
 <p><strong>Name:</strong> ${name}</p>
 <p><strong>Address:</strong> ${address}</p>
 <p><strong>Email:</strong> ${email}</p>
 <p><strong>Contact:</strong> ${contact}</p>

 <h2>Education</h2>
 <p><strong>School:</strong> ${school} (${startDateSchool} - ${endDateSchool})</p>
 <p><strong>College:</strong> ${college} (${startDateCollege} - ${endDateCollege}</p>
 <p><strong>Degree:</strong> ${degree} (${startDateDegree} - ${endDateDegree}</p>

 <h2>Experience</h2>
 <p><strong>Company Name:</strong> ${experienceCompany1} (${experienceStartDate1} - ${experienceEndDate1})</p>
 <p><strong>Company Name:</strong> ${experienceCompany2} (${experienceStartDate2} - ${experienceEndDate2})</p>

 `;


 const generatedResumeDiv = document.getElementById('generatedResume') as HTMLDivElement;
 generatedResumeDiv.innerHTML = resumeSummary;
 document.getElementById('resumeOutput')!.style.display = 'block';

}

const form = document.getElementById('resumeform') as HTMLFormElement;
form.addEventListener('submit', handleFormSubmit);