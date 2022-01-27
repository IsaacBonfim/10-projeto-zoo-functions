const data = require('../data/zoo_data');

function standardFill(objeto, especies) {
  const locates = objeto;

  locates.NE = especies.filter((specie) => specie.location === 'NE').map((specie) => specie.name);
  locates.NW = especies.filter((specie) => specie.location === 'NW').map((specie) => specie.name);
  locates.SE = especies.filter((specie) => specie.location === 'SE').map((specie) => specie.name);
  locates.SW = especies.filter((specie) => specie.location === 'SW').map((specie) => specie.name);

  return locates;
}

function verificaAnimal(specie) {
  const { species } = data;
  const result = species.filter((especie) => {
    let retorno = '';
    if (especie.name === specie) {
      retorno = especie;
    }
    return retorno;
  });

  return result;
}

function verificaResidentes(specie, sex) {
  let result = '';

  if (sex === '') {
    result = verificaAnimal(specie).map((especie) => {
      const { residents } = especie;
      return residents;
    })[0].map((species) => species.name);
  } else if (sex !== '') {
    result = verificaAnimal(specie).map((especie) => {
      const { residents } = especie;
      return residents;
    })[0].filter((resident) => resident.sex === sex).map((species) => species.name);
  }

  return result;
}

function criaChaves(array, sex, sorted) {
  const retorno = [];

  for (let i = 0; i < array.length; i += 1) {
    let aux = '';
    if (sorted === false) {
      aux = {
        [array[i]]: verificaResidentes(array[i], sex),
      };
    } else if (sorted === true) {
      aux = {
        [array[i]]: verificaResidentes(array[i], sex).sort(),
      };
    }

    retorno.push(aux);
  }

  return retorno;
}

function namesFill(objeto, especies, sex, sorted) {
  const locates = objeto;
  const ne = especies.filter((specie) => specie.location === 'NE').map((specie) => specie.name);
  const nw = especies.filter((specie) => specie.location === 'NW').map((specie) => specie.name);
  const se = especies.filter((specie) => specie.location === 'SE').map((specie) => specie.name);
  const sw = especies.filter((specie) => specie.location === 'SW').map((specie) => specie.name);

  locates.NE = criaChaves(ne, sex, sorted);
  locates.NW = criaChaves(nw, sex, sorted);
  locates.SE = criaChaves(se, sex, sorted);
  locates.SW = criaChaves(sw, sex, sorted);

  return locates;
}

function getAnimalMap(options = {}) {
  let locations = { NE: [], NW: [], SE: [], SW: [] };
  const { species } = data;
  const { includeNames = false, sex = '', sorted = false } = options;

  if (includeNames === false) {
    locations = standardFill(locations, species);
  } else if (includeNames === true) {
    locations = namesFill(locations, species, sex, sorted);
  }

  return locations;
}

module.exports = getAnimalMap;
