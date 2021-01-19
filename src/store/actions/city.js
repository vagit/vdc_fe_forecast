import * as actionTypes from './actionTypes'

export const loadCityPending = (bool) => ({
  type: actionTypes.LOAD_CITY_PENDING,
  loading: bool
})

export const loadCitySuccess = (city) => ({
  type: actionTypes.LOAD_CITY_SUCCESS,
  city: city
})

export const loadCityError = (bool) => ({
  type: actionTypes.LOAD_CITY_ERROR,
  error: bool
})

export const updateShowCitySuggestion = (bool) => ({
  type: actionTypes.UPDATE_SHOW_CITY_SUGGESTION,
  showCitySuggestionFlag: bool
})

export const clearCitySuggestion = () => ({
  type: actionTypes.CLEAR_CITY_SUGGESTION
})

export const loadCity = (keyword) => ({
  type: actionTypes.LOAD_CITY,
  keyword: keyword
})