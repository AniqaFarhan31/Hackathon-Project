function handleFormSubmit(event: Event): void {
    event.preventDefault(); 

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;

    const school = (document.getElementById('school') as HTMLInputElement).value;
    const startDateSchool = (document.getElementById('start-date') as HTMLInputElement).value;
    const endDateSchool = (document.getElementById('end-date') as HTMLInputElement).value;

    const college = (document.getElementById('college') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;

    const experienceCompany1 = (document.getElementById('company name') as HTMLInputElement).value;
    const experienceStartDate1 = (document.querySelector('input[name="start-date"]:nth-of-type(1)') as HTMLInputElement).value;
    const experienceEndDate1 = (document.querySelector('input[name="end-date"]:nth-of-type(1)') as HTMLInputElement).value;

    const experienceCompany2 = (document.querySelector('input[name="company name"]:nth-of-type(2)') as HTMLInputElement).value;
    const experienceStartDate2 = (document.querySelector('input[name="start-date"]:nth-of-type(2)') as HTMLInputElement).value;
    const experienceEndDate2 = (document.querySelector('input[name="end-date"]:nth-of-type(2)') as HTMLInputElement).value;

    const resumeSummary = `
    <h2>Resume Summary</h2>
    <h3>Personal Information</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Contact:</strong> ${contact}</p>

    <h3>Education</h3>
    <p><strong>School:</strong> ${school} (${startDateSchool} to ${endDateSchool})</p>
    <p><strong>College:</strong> ${college}</p>
    <p><strong>Degree:</strong> ${degree}</p>

    <h3>Experience</h3>
    <p><strong>Company Name:</strong> ${experienceCompany1} (${experienceStartDate1} to ${experienceEndDate1})</p>
    <p><strong>Company Name:</strong> ${experienceCompany2} (${experienceStartDate2} to ${experienceEndDate2})</p>
    `;


const summaryDiv = document.createElement('div');
summaryDiv.innerHTML = resumeSummary;
document.body.appendChild(summaryDiv);
}

const form = document.getElementById('resumeform') as HTMLFormElement;
form.addEventListener('submit', handleFormSubmit);
