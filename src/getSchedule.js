const data = require('../data/zoo_data');

function animaisDia(dia) {
  const { species } = data;
  const bicho = species.filter((an) => an.availability.some((d) => d === dia)).map((an) => an.name);

  return bicho;
}

function criaChavesDefault(obj, days) {
  const dias = days;
  const retorno = obj;

  for (let i = 0; i < dias.length; i += 1) {
    const ini = Object.values(data.hours[dias[i]])[0];
    const fim = Object.values(data.hours[dias[i]])[1];
    const animaisDoDia = animaisDia(dias[i]);

    retorno[dias[i]] = {
      officeHour: (ini > 0 ? `Open from ${ini}am until ${fim}pm` : 'CLOSED'),
      exhibition: (animaisDoDia.length === 0 ? 'The zoo will be closed!' : animaisDoDia),
    };
  }

  return obj;
}

function criaChaveDias(obj, days) {
  const dia = days;
  const retorno = obj;

  const ini = Object.values(data.hours[dia])[0];
  const fim = Object.values(data.hours[dia])[1];
  const animaisDoDia = animaisDia(dia);

  retorno[dia] = {
    officeHour: (ini > 0 ? `Open from ${ini}am until ${fim}pm` : 'CLOSED'),
    exhibition: (animaisDoDia.length === 0 ? 'The zoo will be closed!' : animaisDoDia),
  };

  return obj;
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

function criaChaveAnimais(obj, animal) {
  const result = verificaAnimal(animal).map((especie) => {
    const { availability } = especie;
    return availability;
  })[0];

  return result;
}

function getSchedule(scheduleTarget = '') {
  const days = Object.keys(data.hours);
  const species = data.species.map((specie) => specie.name);
  let cronograma = {};

  if (days.some((day) => day === scheduleTarget)) {
    cronograma = criaChaveDias(cronograma, scheduleTarget);
  } else if (species.some((specie) => specie === scheduleTarget)) {
    cronograma = criaChaveAnimais(cronograma, scheduleTarget);
  } else {
    cronograma = criaChavesDefault(cronograma, days);
  }

  return cronograma;
}

console.log(getSchedule());

module.exports = getSchedule;
