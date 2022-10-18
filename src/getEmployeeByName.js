const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data; // separando apenas os funcionarios
  const name = employeeName; // reservando o nome fornecido na entrada da função

  let empregado = employees.find((employee) => {
    const { firstName, lastName } = employee; // separando nome e sobrenome do funcionario atual da iteração
    const fullName = `${firstName} ${lastName}`; // montando o nome completo
    let retorno = '';

    if (name === fullName || name === firstName || name === lastName) { // verificando se a entrada condiz com alguma das inforções de nome que atuais.
      retorno = employee; // caso positivo, armazena o funcionario encontrado
    }

    return retorno; // retorna o fucionario encontrado
  });

  if (empregado === undefined) { empregado = {}; } // verifica se o empregado retornado é "undefined" e caso positivo, substitui por um objeto vazio.

  return empregado;
}

module.exports = getEmployeeByName;
