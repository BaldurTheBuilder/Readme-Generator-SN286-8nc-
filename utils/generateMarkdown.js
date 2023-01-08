// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added near the top of the README and a notice is added to the section of
  //the README entitled License that explains which license the application is covered under
function renderLicenseBadge(license) {
  if(license && license.toLowerCase() !== 'none') {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-lightblue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
      ${data.description}
  ## Table of Contents
      ${data.tableOfContents}
  ## Installation
      ${data.installation}
  ## Usage
      ${data.usage}
  ## License
      ${renderLicenseBadge(data.license)}
  ## How to Contribute
      ${data.contributing}
  ## Tests
      ${data.tests}
  ## Questions
      ${data.userQuestions}
      `;
}

module.exports = generateMarkdown;
