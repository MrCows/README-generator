// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if (license === 'GPLv3') {
    return '[GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'Apache 2.0') {
    return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
This project is licensed under the ${license} license. Read more at ${renderLicenseLink(license)}`;
  }
  return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
For any questions, you can contact me via:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;