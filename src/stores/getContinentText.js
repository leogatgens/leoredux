import { Continents } from '../containerMaterialUI/data';
import { paises } from '../containerMaterialUI/data'


function getRandomCountry(countriesToShow) {
  let limitemaximo = countriesToShow.length;
  let index = Math.floor(Math.random() * limitemaximo);
  return index;
}


export function countriesByContinent(indicefilter) {
  let filter = Continents[indicefilter];
  let listaAMostar = null;
  if (filter !== 'All') {
    listaAMostar = paises.filter(x => x.Continent === filter);
  } else {
    listaAMostar = paises;
  }

  listaAMostar = listaAMostar.slice(0, 5);
  let DatosJuego = { listaPaises: listaAMostar, paisActual: getRandomCountry(listaAMostar) };
  return DatosJuego;
}


