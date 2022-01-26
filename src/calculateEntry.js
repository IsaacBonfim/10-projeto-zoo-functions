const data = require('../data/zoo_data');

console.log(data.prices);

function countEntrants(entrants = []) {
  const entradas = { child: 0, adult: 0, senior: 0 };

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

module.exports = { calculateEntry, countEntrants };
