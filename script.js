(function() {
  'use strict';

  let data = {
    name: 'Pedro Luiz Moreira Penna',
    email: 'pedropenna@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/pedropenna',
    phone: '+55 31 9-9279-6486',

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


  let languagesHtml = data.languages
      .map((language) => {
        return '<li>' + language.name + separator() + language.level + '</li>';
      })
      .join('');
  document.getElementById("languages").innerHTML = languagesHtml;

  function separator() {
    return '<span class="separador">&mdash;</span>';
  }
})();
