import { Continents } from '../containerMaterialUI/data';
import {paises} from '../containerMaterialUI/data'



export function getContinentText(index) {
  let currentContinent = Continents[index];
  return currentContinent;
}
export function getRandomCountry() {
  let index = Math.floor(Math.random() * 5);
  return index;
}


export function countriesByContinent(indicefilter) {
   let filter = Continents[indicefilter];
  
 
let listaAMostar = null;
  if (filter !== 'All') {
    listaAMostar = paises.filter(x => x.Continent === filter);
  }else{
    listaAMostar = paises;
  }

  return listaAMostar;
}


export function getRandomCountryByContinent(listaPaises) {
  let cantidadRegistros = listaPaises.length;
  let index = Math.floor(Math.random() * cantidadRegistros);
  return index;
}
