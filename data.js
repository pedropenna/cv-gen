
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
      tech: 'Java, JavaScript, Spring Boot, Splunk, Jenkins, OWASP Zed Attack Proxy, OWASP Dependency Check, PiTest, Sonar, Intellij, Git, JUnit and Hamcrest',
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
    {
      company: 'ETEG',
      startMonth: 11,
      startYear: 2004,
      endMonth: 1,
      endYear: 2010,
      role: 'Software Developer/Architect',
      activities: [
        {
          startYear: 2004,
          endYear: 2007,
          description: 'Created and evolved a financial system\'s architecture for a financial company and led a team of developers',
        },
        {
          startYear: 2007,
          endYear: 2010,
          description: 'Worked on-site on the evolution of the hospital management system\'s architecture for FHEMIG, the state hospital foundation that is responsible for the largest public hospital network in Latin America. Also worked as the team\'s tech lead and on the configuration, server provisioning and the system monitoring',
        }
      ],
      tech: 'Java, Spring, Hibernate, Tapestry 5, Struts, JSP/Servlet, Groovy, Grails, Velocity, Sitemesh, Acegi/Spring Security, AOP, HTML/CSS, JavaScript, Eclipse, IntelliJ IDEA, Tomcat, JBoss, Jetty, Ant, Maven, JUnit, Coverage, SVN, MySQL and SQL Server',
    },
    {
      company: 'Pentagrama Consultoria e Sistemas',
      startMonth: 2,
      startYear: 2004,
      endMonth: 10,
      endYear: 2004,
      role: 'Software Developer',
      activity: 'Worked alone (and on-site) in the development of several systems for a clinical laboratory',
      tech: 'Java, JSP/Servlet, Struts, HTML, JavaScript, Applet, XML/XSLT, Eclipse, Tomcat, MySQL and Cach\u00E9',
    },
    {
      company: 'Squadra Tecnologia',
      startMonth: 2,
      startYear: 2003,
      endMonth: 2,
      endYear: 2004,
      role: 'Front-End/Web Developer',
      activity: 'Development of multiple web applications',
      tech: 'Java, JSP/Servlet, Struts, HTML, JavaScript, Eclipse, ASP, Delphi, Oracle, JBuilder, JBoss and Websphere',
    },
    {
      internship: true,
      startMonth: 3,
      startYear: 2001,
      endMonth: 12,
      endYear: 2001,
      role: 'Software Developer (Internship)',
      activity: 'Development of several web applications',
      tech: 'PHP, Delphi, Visual Basic, Embedded Visual Basic, HTML, CSS, JavaScript, PostgreSQL, MySQL and SQL Server',
    }
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

