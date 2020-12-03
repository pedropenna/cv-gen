(function() {
  let data = {
    name: 'Pedro Luiz Moreira Penna',
    email: 'pedropenna@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/pedropenna',
    phone: '+55 31 9-9279-6486'
  };

  let nameHtml = data.name
      .toUpperCase()
      .split(' ')
      .reduce((rest, word) => {
        return rest + ' <span class="capNome">' + word.substring(0, 1) + '</span>' + word.substring(1);
      });
  console.log('nameHtml', nameHtml);

  document.getElementById("name").innerHTML = nameHtml;
  document.getElementById("email").innerText = data.email;
  document.getElementById("linkedIn").innerHTML = data.linkedIn;
  document.getElementById("linkedIn").href = data.linkedIn;
  document.getElementById("phone").innerHTML = data.phone;


})();
