const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // * seu código aqui
  const { species } = data;
  const ident = [...ids];

  return species.filter((specie) => {
    const { id } = specie;
    let especie = '';

    for (let i = 0; i < ident.length; i += 1) {
      if (id === ident[i]) {
        especie = specie;
      }
    }
    return especie;
  });
}

module.exports = getSpeciesByIds;
