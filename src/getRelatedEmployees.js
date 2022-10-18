const data = require('../data/zoo_data');

function isManager(id) {
  const managers = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '0e7b460e-acf4-4e17-bcb3-ee472265db83']; // array contendo as Ids referentes aos gerentes do Zoo.

  const result = managers.some((manager) => (manager === id));
  // verificando se a Id de entrada da função é igual a alguma das Ids presentes no arry de ids de gerentes.

  return result;
}

function busca(id, employee) {
  const { managers } = employee;

  const result = managers.find((mIds) => (mIds === id ? employee : ''));

  return result;
}

function getRelatedEmployees(managerId) {
  try {
    const { employees } = data;
    let pessoas = '';

    if (isManager(managerId) === true) {
      pessoas = employees.filter((employee) => {
        const pessoa = busca(managerId, employee);

        return pessoa;
      }).map((employee) => `${employee.firstName} ${employee.lastName}`);
    } else { throw new Error('O id inserido não é de uma pessoa colaboradora gerente!'); }

    return pessoas;
  } catch (error) { throw error.message; }
}

module.exports = { isManager, getRelatedEmployees };
