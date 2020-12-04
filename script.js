(function() {
  'use strict';

  let data = {
    name: 'Pedro Luiz Moreira Penna',
    email: 'pedropenna@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/pedropenna',
    phone: '+55 31 9-9279-6486',

    experience: [
      {
        company: 'ThoughtWorks',
        startMonth: 9,
        startYear: 2017,
        role: 'Senior Consultant Developer',
        activity: 'Worked on the development of multiple microservices for a large airline company',
        tech: 'Java, JavaScript, Spring Boot, Splunk, Jenkins, OWASP Zed Attack Proxy, OWASP Dependency Check, PiTest, Sonar, Intellij, Agile Software Development, Git, JUnit and Hamcrest',
        methodology: 'Agile, Kanban, Continuous Integration and Test-Driven Development',
      },
      {
        company: 'Sydle',
        startMonth: 6,
        startYear: 2016,
        endMonth: 9,
        endYear: 2017,
        role: 'Software Engineer',
        activity: 'Worked on the development of a new product, that was critical to the success of the company\'s new strategy',
        tech: 'Angular 4, Java, MongoDB, JavaScript, TypeScript, HTML/CSS, SCSS, jQuery, Eclipse, Tomcat, Ivy, Git, JUnit and REST Assured',
        methodology: 'Scrum and Test-Driven Development',
      },
      {
        company: 'ETEG',
        startMonth: 10,
        startYear: 2010,
        endMonth: 12,
        endYear: 2015,
        role: 'Software Developer/Architect',
        activity: 'Worked on-site on the evolution of the hospital management system\'s architecture for FHEMIG, the state hospital foundation that is responsible for the largest public hospital network in Latin America. Also worked as the team\'s tech lead and on the configuration, server provisioning and the system monitoring',
        tech: 'Java, Spring, Hibernate, Tapestry 5, JSP/Servlet, Groovy, Grails, Velocity, Sitemesh, Acegi/Spring Security, AOP, HTML/CSS, JavaScript, IntelliJ IDEA, Eclipse, Apache Tomcat, Apache HTTP Server, Mod_JK, JBoss, Jetty, Ant, Maven, Junit, TestNG, Coverage, Sonar, Hudson, SVN, Git, Xen Hypervisor and MySQL',
        methodology: 'Scrum',
      },
      {
        company: 'iFactory',
        startMonth: 6,
        startYear: 2010,
        endMonth: 10,
        endYear: 2010,
        role: 'Software Developer',
        activity: 'Worked remotely (from home) as part of the development team responsible for the Oxford English Dictionary website and search feature',
        tech: 'Java, Tapestry 5, XPath, XQuery, Jetty, Eclipse, jUnit and Selenium',
      },
      {
        company: 'Samba Tech',
        startMonth: 1,
        startYear: 2010,
        endMonth: 6,
        endYear: 2010,
        role: 'Software Developer',
        activity: 'Worked on the company\'s main media management product',
        tech: 'Java, Spring, AOP, Hibernate, Eclipse, SpringSource Tool Suite, GraniteDS, BlazeDS, Tomcat, Ant, Maven, Junit and MySQL',
        methodology: 'Scrum',
      },
      
    ],

    certifications: [
      'Core Spring 3 Certification',
      'Sun Certified Enterprise Architect',
      'Sun Certified Business Component Developer',
      'Sun Certified Web Component Developer',
      'Sun Certified Java Programmer'
    ],
    education: [
      {
        degree: 'Bachelor\'s degree in Computer Science',
        location: 'Pontif\u00EDcia Universidade Cat\u00F3lica de Minas Gerais'
      }
    ],
    languages: [
      {
        name: 'English',
        level: 'Full Professional Proficiency (Fluent)'
      },
      {
        name: 'Spanish',
        level: 'Limited Professional Proficiency'
      },
      {
        name: 'Portuguese',
        level: 'Native'
      }
    ]
  };

  let nameHtml = data.name
      .toUpperCase()
      .split(' ')
      .map((word) => {
        return '<span class="capNome">' + word.substring(0, 1) + '</span>' + word.substring(1);
      })
      .join(' ');

  document.getElementById("name").innerHTML = nameHtml;
  document.getElementById("email").innerText = data.email;
  document.getElementById("linkedIn").innerHTML = data.linkedIn;
  document.getElementById("linkedIn").href = data.linkedIn;
  document.getElementById("phone").innerHTML = data.phone;

  let experience = data.experience
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

  let certifications = data.certifications
      .map((certification) => createSimpleItemList(certification))
      .forEach((item) => {
        document.getElementById('certifications').appendChild(item);
      });

  let education = data.education
      .map(({degree, location}) => createNameDescriptionItemList(degree, location))
      .forEach((item) => {
        document.getElementById('education').appendChild(item);
      });

  let languages = data.languages
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
      fullDescription = start + ' to ' + end;
    } else {
      fullDescription = 'Since ' + start;
    }

    return createSpan(fullDescription, 'data');
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
    let activity = createSimpleItemList('Activity: ' + experience.activity + '.');
    experienceAttributes.push(activity);
    let tech = createSimpleItemList('Technology/Tools: ' + experience.tech + '.');
    experienceAttributes.push(tech);
    if (experience.methodology) {
      let methodology = createSimpleItemList('Methodology: ' + experience.methodology + '.');
      experienceAttributes.push(methodology);
    }
    return experienceAttributes;
  }

  function formatMonth(month) {
    let longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
    let shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return longMonths[month - 1];
  }
})();
