const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data; // pegando todas as especies do banco de dados.
  const ident = [...ids]; // separando todas as Ids passadas como entrada em um array.

  return species.filter((specie) => { // filtrando as especies do banco de dados.
    const { id } = specie; // coletando a Id da especie.
    let especie = '';

    for (let i = 0; i < ident.length; i += 1) { // loop para andar no arry de Ids de entrada.
      if (id === ident[i]) { // comparando a Id atual com o as Ids fornecidas na entrada da função.
        especie = specie; // alocando a especie identificada para retorna-la.
      }
    }
    return especie; // retonando as especies identificadas.
  });
}

module.exports = getSpeciesByIds;
