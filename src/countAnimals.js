const data = require('../data/zoo_data');

function undAnimal() {
  const { species } = data;
  const animais = species.map((specie) => specie.name);
  const quantidade = species.map((specie) => specie.residents.length);
  const especies = {};

  for (let i = 0; i < animais.length; i += 1) {
    especies[animais[i]] = quantidade[i];
  }

  return especies;
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

function verificaGenero(specie, sex) {
  const result = verificaAnimal(specie).map((especie) => {
    const { residents } = especie;
    return residents;
  })[0].filter((resident) => resident.sex === sex);

  return result;
}

function countAnimals(animal = {}) {
  const { specie } = animal;
  const { sex } = animal;
  let animais = '';

  if (specie === undefined && sex === undefined) {
    animais = undAnimal();
  } else if (specie !== undefined && sex === undefined) {
    [animais] = verificaAnimal(specie).map((especie) => especie.residents.length);
  } else {
    animais = verificaGenero(specie, sex).length;
  }

  return animais;
}

console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
