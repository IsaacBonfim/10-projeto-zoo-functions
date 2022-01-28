const data = require('../data/zoo_data');

function findEmployee(entry) {
  try {
    const { employees } = data;

    const retorno = employees.filter((employee) => {
      let funcionario = '';
      if (employee.firstName === entry || employee.lastName === entry || employee.id === entry) {
        funcionario = employee;
      }
      return funcionario;
    });

    if (retorno[0] === undefined) { throw new Error('Informações inválidas'); }

    return retorno;
  } catch (error) {
    throw error.message;
  }
}

function findSpecies(ident) {
  const { species } = data;

  const retorno = species.filter((specie) => {
    const { id } = specie;
    let animal = '';

    for (let i = 0; i < ident.length; i += 1) {
      if (id === ident[i]) {
        animal = specie;
      }
    }
    return animal;
  });

  return retorno;
}

function buscaId(entry) {
  const id = findEmployee(entry).map((employee) => employee.id);

  return id;
}

function montaFullName(entry) {
  const fullName = findEmployee(entry).map((employe) => `${employe.firstName} ${employe.lastName}`);

  return fullName;
}

function buscaSpecies(entry) {
  const [especies] = findEmployee(entry).map((employee) => employee.responsibleFor);

  const retorno = [findSpecies(especies).map((specie) => specie.name)];

  return retorno;
}

function buscaLocation(entry) {
  const [especies] = findEmployee(entry).map((employee) => employee.responsibleFor);

  const retorno = [findSpecies(especies).map((specie) => specie.location)];

  return retorno;
}

function verificaInfos(entry, obj) {
  const retorno = obj;

  [retorno.id] = buscaId(entry);
  [retorno.fullName] = montaFullName(entry);
  [retorno.species] = buscaSpecies(entry);
  [retorno.locations] = buscaLocation(entry);

  return retorno;
}

function defaultReturn(obj) {
  const { employees } = data;

  const [retorno] = [employees.map((employee) => {
    const objeto = { ...obj };

    const info = verificaInfos(employee.firstName, objeto);
    return info;
  })];

  return retorno;
}

function getEmployeesCoverage(obj = {}) {
  const { name } = obj;
  const { id } = obj;

  let infos = {
    id: '',
    fullName: '',
    species: '',
    locations: '',
  };

  if (name !== undefined) {
    infos = verificaInfos(name, infos);
  } else if (id !== undefined) {
    infos = verificaInfos(id, infos);
  } else {
    infos = defaultReturn(infos);
  }
  return infos;
}

module.exports = getEmployeesCoverage;
