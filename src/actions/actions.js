/*
 * action types
 */

export const CHANGE_COLOR = 'CHANGE_COLOR'
export const REQUEST_COUNTRIES_BY_CONTINENT = 'REQUEST_COUNTRIES_BY_CONTINENT'
export const NEXT_COUNTRY = 'NEXT_COUNTRY'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function CambiarFondo(text) {
  return { type: CHANGE_COLOR, text }
}

export function RequestContinents(index) {
  return { type: REQUEST_COUNTRIES_BY_CONTINENT, index }
}

export function nextCountry(index) {
  return { type: NEXT_COUNTRY, index }
}