const data = require('../data/zoo_data');

console.log(data.prices);

function countEntrants(entrants = []) {
  const entradas = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  if (Object.keys(entrants).length > 0) {
    entradas.child = entrants.filter((entrant) => entrant.age < 18).length;
    entradas.adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
    entradas.senior = entrants.filter((entrant) => entrant.age >= 50).length;
  }

  return entradas;
}

function calculateEntry(entrants = []) {
  const visitantes = countEntrants(entrants);
  let { adult, senior, child } = data.prices;

  child *= visitantes.child;
  adult *= visitantes.adult;
  senior *= visitantes.senior;

  return child + adult + senior;
}

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
