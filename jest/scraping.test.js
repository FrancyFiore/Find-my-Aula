const scraping = require('./scraping');

var nome = "Fabio";
var cognome = "Casati"

test(nome + " " + cognome, () => {
  expect(scraping(nome, cognome)).toBe("Ingegneria del software 2");
});
