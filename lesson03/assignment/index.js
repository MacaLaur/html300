$(document).ready(function() {
  // profiles array representing JSON data on the components' information
  const profiles = [
    {
      "name": "Steve Smith",
      "jobTitle": "Project Manage",
      "company": "Front End Dev Co",
      "experience": "3 years",
      "school": "UW",
      "major": "Marketing",
      "email": "steve@fedc.com",
      "linkedInUrl": "steve.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", ".NET", "C#"
      ]
    },
    {
      "name": "Aaron Katz",
      "jobTitle": "Full Stack Developer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "SU",
      "major": "Computer Science",
      "email": "aaronNotMyemail@uw.com",
      "linkedInUrl": "aaron.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "PHP", "Twig"
      ]
    },
    {
      "name": "Kyle Hendricks",
      "jobTitle": "Starting Pitcher",
      "company": "Chicago Cubs",
      "experience": "12 years",
      "school": "USC",
      "major": "Pitching",
      "email": "kyleH@cubs.com",
      "linkedInUrl": "kyle.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Ruby", "Rails"
      ]
    },
    {
      "name": "Michael Jordan",
      "jobTitle": "Point Guard",
      "company": "Chicago Buls",
      "experience": "20 years",
      "school": "UNC",
      "major": "Trash Talking",
      "email": "mJordan@bulls.com",
      "linkedInUrl": "mJordas.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "Java", "Spring"
      ]
    }
  ];

// Using a method to iterate over the array of data and also using the map() function to apply a template string
  profiles.map(function(el) {
    let profile = `
      <div class="main">
        <div class="flex-container">
          <div class="primary"> <!-- bulk of card profile content including photo, name, job title -->
            <img src="../img/unsplash-headshot.jpg" alt="Headshot of Steve Smith" height=400 width=400 class="profile">
            <h1 class="profile_name"><b>${el.name}</b></h1>
            <h2 class="profile_job"><em>${el.jobTitle}</em></h2>
          </div>
          <div class="secondary"> <!-- card info on Steve -->
            <p class="profile_company"><b>Company:</b> ${el.company}</p>
            <p class="profile_experience"><b>Experience:</b> ${el.experience}</p>
            <p class="profile_school"><b>School:</b> ${el.school}</p>
            <p class="profile_major"><b>Major:</b> ${el.major}</p>
            <p class="profile_email"><b>Email:</b> ${el.email}</p>
              <div class="inline">
                <img src="../img/linkedin.svg" alt="LinkedIn logo" class="linkedin">
                <a href="#" class="profile_linkedIn">${el.linkedInUrl}</a>
              </div>
            <p class="profile_languages"><b>Languages:</b> ${el.codeLanguages}</p>
          </div>
        </div>
      </div>
    `;
    // Use the below code to append each iteration of the map() function to an element within the html file
    $(".template-hook").append(profile);
  });
});
