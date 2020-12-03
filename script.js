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

  document.getElementsByClassName("nome")[0].innerHTML = '<span class="capNome">P</span>EDRO <span class="capNome">L</span>UIZ  <span class="capNome">L</span>UIZ  <span class="capNome">L</span>UIZ <span class="capNome">M</span>OREIRA <span class="capNome">P</span>ENNA';
  document.getElementsByClassName("nome")[0].innerHTML = nameHtml;


})();
