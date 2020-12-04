(function() {
  'use strict';

  let resume = data || {};

  let nameHtml = resume.name
      .toUpperCase()
      .split(' ')
      .map((word) => {
        return '<span class="capNome">' + word.substring(0, 1) + '</span>' + word.substring(1);
      })
      .join(' ');

  document.getElementById("name").innerHTML = nameHtml;
  document.getElementById("email").innerText = resume.email;
  document.getElementById("linkedIn").innerHTML = resume.linkedIn;
  document.getElementById("linkedIn").href = resume.linkedIn;
  document.getElementById("phone").innerHTML = resume.phone;

  let experience = resume.experience
      .forEach((experience) => {
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        cell.className = 'experienciaDetalhe';
        cell.appendChild(createSpan('Company: ' + experience.company, 'company'));
        cell.appendChild(createSpan(' ', ''));
        cell.appendChild(createSeparator());
        cell.appendChild(createSpan(' ', ''));
        cell.appendChild(createPeriod(experience));
        cell.appendChild(createList(createExperienceAttributes(experience)));
        row.appendChild(cell);
        document.getElementById('experience').appendChild(row);
      });

  let certifications = resume.certifications
      .map((certification) => createSimpleItemList(certification))
      .forEach((item) => {
        document.getElementById('certifications').appendChild(item);
      });

  let education = resume.education
      .map(({degree, location}) => createNameDescriptionItemList(degree, location))
      .forEach((item) => {
        document.getElementById('education').appendChild(item);
      });

  let languages = resume.languages
      .map(({name, level}) => createNameDescriptionItemList(name, level))
      .forEach((item) => {
           document.getElementById('languages').appendChild(item);
      });

  function createSeparator() {
    let span = document.createElement('span');
    span.className = 'separador';
    span.innerHTML = '&mdash;';
    return span;
  }

  function createNameDescriptionItemList(name, description) {
    let list = document.createElement('li');
    list.appendChild(document.createTextNode(name));
    list.appendChild(createSeparator());
    list.appendChild(document.createTextNode(description));
    return list;
  }

  function createSimpleItemList(description) {
    let list = document.createElement('li');
    list.appendChild(document.createTextNode(description));
    return list;
  }

  function createItemList(text, child) {
    let list = document.createElement('li');
    list.appendChild(document.createTextNode(text));
    list.appendChild(child);
    return list;
  }

  function createItemListWithMultipleChildren(children) {
    let list = document.createElement('li');
    children.forEach((child) => {
      list.appendChild(child);
    });

    return list;
  }

  function createSpan(text, className) {
    let span = document.createElement('span');
    span.className = className;
    span.appendChild(document.createTextNode(text));
    return span;
  }

  function createPeriod(experience) {
    let start = formatMonth(experience.startMonth) + ' ' + experience.startYear;

    let fullDescription;
    if (experience.endYear) {
      let end = formatMonth(experience.endMonth) + ' ' + experience.endYear;

      if (experience.startYear) {
        fullDescription = start + ' to ' + end;
      } else {
        fullDescription = 'Until ' + end;
      }
    } else {
      fullDescription = 'Since ' + start;
    }

    return createSpan(fullDescription, 'resume');
  }

  function createList(listItems) {
    let list = document.createElement('ul');
    listItems.forEach((item) => {
      list.appendChild(item);
    });
    return list;
  }

  function createExperienceAttributes(experience) {
    let experienceAttributes = [];
    let role = createSimpleItemList('Role: ' + experience.role + '.');
    experienceAttributes.push(role);
    if (experience.activity) {
      let activity = createSimpleItemList('Activity: ' + experience.activity + '.');
      experienceAttributes.push(activity);
    } else {
      let nestedActivities = document.createElement("ul");
      experience.activities
        .forEach((activity) => {
          let activityPeriod = createPeriod(activity);
          let activityDescription = document.createTextNode(activity.description);
          nestedActivities.appendChild(createItemListWithMultipleChildren([ activityPeriod, createSeparator(), activityDescription ]));
        });
      let activity = createItemList('Activity: ', nestedActivities);
      experienceAttributes.push(activity);
    }
    let tech = createSimpleItemList('Technology/Tools: ' + experience.tech + '.');
    experienceAttributes.push(tech);
    if (experience.methodology) {
      let methodology = createSimpleItemList('Methodology: ' + experience.methodology + '.');
      experienceAttributes.push(methodology);
    }
    return experienceAttributes;
  }

  function formatMonth(month) {
    if (!month) {
      return '';
    }

    let longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
    let shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return longMonths[month - 1];
  }
})();
