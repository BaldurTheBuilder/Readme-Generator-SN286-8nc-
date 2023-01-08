//WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added near the top of the README and a notice is added to the section of
  //the README entitled License that explains which license the application is covered under
function renderLicenseBadge(license) {
  if(license && license.toLowerCase() !== 'none') {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-lightblue.svg)`;
  }
  else return '';
}

function renderLicenseLink(license) {
  if(license && license.toLowerCase() !== 'none') {
    return `[License](#${license})`;
  }
  else return '';
}

function renderLicenseSection(license) {
  if(license && license.toLowerCase() !== 'none') {
   return `## License\n${renderLicenseBadge(license)}\n\n${renderLicenseLink(license)}`;
  }
  else return '';
}

//WHEN I enter my GitHub username it is added to the Questions section with a link to my GitHub profile
//WHEN I enter my email address it is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
function renderQuestionsSection(username, email) {
  if(username && email) {
    return `##Questions?\nAccess my GitHub at: https://github.com/${username}, or email me at: ${email}`;
  }
  else if(username) {
    return `##Questions?\nAccess my GitHub at: https://github.com/${username}`;
  }
  else if(email){
    return `##Questions?\nEmail me at: ${email}`;
  }
  else return '';

}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
      ${data.description}
  ## Table of Contents
      ${data.tableOfContents}
  ## Installation
      ${data.installation}
  ## Usage
      ${data.usage}
  ${renderLicenseSection(data.license)}
  ## How to Contribute
      ${data.contributing}
  ## Tests
      ${data.tests}
  ${renderQuestionsSection(data.username, data.email)}
      `;
}

module.exports = generateMarkdown;
