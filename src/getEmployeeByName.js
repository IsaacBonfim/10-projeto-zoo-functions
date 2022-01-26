const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const name = employeeName;

  let empregado = employees.find((employee) => {
    const { firstName, lastName } = employee;
    const fullName = `${firstName} ${lastName}`;
    let retorno = '';

    if (name === fullName || name === firstName || name === lastName) {
      retorno = employee;
    }

    return retorno;
  });

  if (empregado === undefined) { empregado = {}; }

  return empregado;
}

console.log(getEmployeeByName());

// Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

module.exports = getEmployeeByName;
