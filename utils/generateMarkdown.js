
// Return badge for license
function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case 'MIT License':
      badge = 'MIT';
      break;
    case 'Apache License 2.0':
      badge = 'Apache-2.0';
      break;
    case 'Mozilla Public License 2.0':
      badge = 'mpl-2.0'
      break;
    case 'GNU AGPLv3':
      badge = 'agpl-3.0';
      break;
    case 'GNU GPLv3':
      badge = 'gpl-3.0'
      break;
    case 'GNU LGPLv3':
      badge = 'lgpl-3.0'
      break;
    case 'Boost Software License 1.0':
      badge = 'bsl-1.0';
      break;
    case 'The Unlicense':
      badge = 'unlicense';
      break;
    case 'None': return ''
  }

  return `https://img.shields.io/static/v1?label=License&message=${badge}&color=blue`
};

// Return license link (used for the badge icon)
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License': return 'https://opensource.org/licenses/MIT'
    case 'Apache License 2.0': return 'https://www.apache.org/licenses/LICENSE-2.0'
    case 'Mozilla Public License 2.0': return 'https://www.mozilla.org/en-US/MPL/2.0/'
    case 'GNU AGPLv3': return 'https://www.gnu.org/licenses/agpl-3.0.html'
    case 'GNU GPLv3': return 'https://www.gnu.org/licenses/gpl-3.0.html'
    case 'GNU LGPLv3': return 'https://www.gnu.org/licenses/lgpl-3.0.html'
    case 'Boost Software License 1.0': return 'https://www.boost.org/LICENSE_1_0.txt'
    case 'The Unlicense': return 'https://unlicense.org/'
    case 'None': return ''
  }
};

// render License Section function (Contains the license notices) 
function renderLicenseSection(license, github, title, description) {
  const todaysDate = new Date()
  const currentYear = todaysDate.getFullYear()

  switch (license) {
    // MIT License
    case 'MIT License':
      return `
MIT License

Copyright (c) ${currentYear} ${github}
      
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
      
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
      
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    
    // Apache License
    case 'Apache License 2.0':
      return `
Copyright ${currentYear} ${github}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   
http://www.apache.org/licenses/LICENSE-2.0
   
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
    
    // MPL 2.0 License
    case 'Mozilla Public License 2.0':
      return `
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at  
http://mozilla.org/MPL/2.0/.`

    // GNU AGPLv3 License
    case 'GNU AGPLv3':
      return `
${title} - ${description}  
Copyright (C) ${currentYear}  ${github}
  
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
  
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.
  
You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`
    
    // GNU GPLv3 License
    case 'GNU GPLv3' || 'GNU LGPLv3':
      return `
${title} - ${description}  
Copyright (C) ${currentYear}  ${github}
  
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
  
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
  
You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`
    
    // BSL 1.0 License (extra line before and after as  required)
    case 'Boost Software License 1.0':
      return `

Copyright ${github} ${currentYear}.
Distributed under the Boost Software License, Version 1.0.  
(See accompanying file LICENSE_1_0.txt or copy at
(https://www.boost.org/LICENSE_1_0.txt))

`
    // The Unlicense 'license'
    case 'The Unlicense':
      return `
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.
      
In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.
      
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
      
For more information, please refer to <https://unlicense.org>`

    // 'None' selected for license
    case 'None': return ''
  };
};


// Generate MarkDown function
function generateMarkdown(data) {
  let badge = '';
  if (data.license != 'None') {
    badge = `[![license](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})`
  };
  return `
# ${data.title}
${badge}
## Description: 
${data.description}
## Table of Contents: 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution Guidelines](#contribution-guidelines)
* [Testing](#testing)
* [Questions](#questions)
* [Licensing](#licensing)
  
## Installation
${data.installation}

## Usage
${data.usage}

## Contribution Guidelines
${data.contribution}

## Testing
${data.testing}

## Questions
Contact Me: 
* GitHub: [${data.github}](http://github.com/${data.github})
* e-mail: [${data.email}](mailto:${data.email})

## Licensing:
${renderLicenseSection(data.license, data.github, data.title, data.description)} 
`;
};

module.exports = generateMarkdown;
