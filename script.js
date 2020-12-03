(function() {
  'use strict';

  let data = {
    name: 'Pedro Luiz Moreira Penna',
    email: 'pedropenna@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/pedropenna',
    phone: '+55 31 9-9279-6486',

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

  let education = data.education
      .map(({degree, location}) => nameDescriptionItemList(degree, location))
      .map((item) => {
        document.getElementById("education").appendChild(item);
      });

  let languages = data.languages
      .map(({name, level}) => nameDescriptionItemList(name, level))
      .map((item) => {
           document.getElementById("languages").appendChild(item);
      });

  function separator() {
    let span = document.createElement('span');
    span.className = 'separador';
    span.innerHTML = '&mdash;';
    return span;
  }

  function nameDescriptionItemList(name, description) {
    let list = document.createElement('li');
    list.appendChild(document.createTextNode(name));
    list.appendChild(separator());
    list.appendChild(document.createTextNode(description));
    return list;
  }
})();
