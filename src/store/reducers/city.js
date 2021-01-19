import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  error: null,
  errorMsg: null,
  showCitySuggestionFlag: null,
  cityList: null,
  loading: null
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CITY_PENDING:
      return updateObject(state, {
        loading: action.loading,
        showCitySuggestionFlag: true
      })
    case actionTypes.LOAD_CITY_SUCCESS:
      return updateObject(state, {
        cityList: action.city,
        loading: false,
        error: false,
        errorMsg: action.city.length > 0 ? "" : "No results found",
      })
    case actionTypes.LOAD_CITY_ERROR:
      return updateObject(state, {
        error: action.error,
        errorMsg: "No results found",
      })
    case actionTypes.UPDATE_SHOW_CITY_SUGGESTION:
      return updateObject(state, {
        showCitySuggestionFlag: action.showCitySuggestionFlag,
      })
    case actionTypes.CLEAR_CITY_SUGGESTION:
      return updateObject(state, {
        showCitySuggestionFlag: false,
        cityList: [],
      })
    default:
      return state
  }
}

export default reducers
