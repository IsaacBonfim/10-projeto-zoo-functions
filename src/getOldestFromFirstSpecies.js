const data = require('../data/zoo_data');

function montaRetorno(array) {
  const residentes = array;
  const idade = Math.max(...residentes.map((residente) => residente.age));

  const retorno = residentes.find((residente) => residente.age === idade);

  return [retorno.name, retorno.sex, retorno.age];
}

function getOldestFromFirstSpecies(id) {
  const { employees } = data;
  const { species } = data;
  const animal = employees.filter((employee) => employee.id === id).map((employee) => {
    const { responsibleFor } = employee;
    return responsibleFor;
  })[0][0];

  const residentes = species.filter((specie) => specie.id === animal).map((specie) => {
    const { residents } = specie;
    return residents;
  })[0];

  const infos = montaRetorno(residentes);

  return infos;
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
