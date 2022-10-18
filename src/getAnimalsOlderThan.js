const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age = 0) {
  const { species } = data; // separando todas as especies

  const resultado = species.filter((specie) => {
    const { name } = specie; // separando o nome da especie no momento atual da iteração
    let retorno = '';

    if (name === animal) { retorno = specie; } // verificando se o nome que tenho é igual ao nome passado como argumento

    return retorno; // retornando o objeto referente a especie encontrada
  }).every((specie) => {
    const { residents } = specie; // separando os residentes da especie retornada pelo filter.

    const retorno = residents.every((resident) => (resident.age >= age)); // comparando a idade dos residentes com a idade passada como argumento

    return retorno; // retornando se todos os redidentes passaram no teste ou não.
  });

  return resultado;
}

module.exports = getAnimalsOlderThan;
