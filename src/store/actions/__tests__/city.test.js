import * as actionTypes from '../actionTypes'
import * as action from '../city'

describe('City actions', () => {
  it('should create an action to load city', () => {
    const keyword = ''
    const expectedAction = {
      type: actionTypes.LOAD_CITY,
      keyword
    }
    expect(action.loadCity(keyword)).toEqual(expectedAction)
  })
  it('should create an action start to load city', () => {
    const loading = true
    const expectedAction = {
      type: actionTypes.LOAD_CITY_PENDING,
      loading
    }
    expect(action.loadCityPending(loading)).toEqual(expectedAction)
  })
  it('should create an action when load city error', () => {
    const error = true
    const expectedAction = {
      type: actionTypes.LOAD_CITY_ERROR,
      error
    }
    expect(action.loadCityError(error)).toEqual(expectedAction)
  })
  it('should create an action when load city success', () => {
    const city = []
    const expectedAction = {
      type: actionTypes.LOAD_CITY_SUCCESS,
      city
    }
    expect(action.loadCitySuccess(city)).toEqual(expectedAction)
  })
  it('should create an action to show suggestion list', () => {
    const showCitySuggestionFlag = true
    const expectedAction = {
      type: actionTypes.UPDATE_SHOW_CITY_SUGGESTION,
      showCitySuggestionFlag
    }
    expect(action.updateShowCitySuggestion(showCitySuggestionFlag)).toEqual(expectedAction)
  })
  it('should create an action to clear suggestion list', () => {
    const expectedAction = {
      type: actionTypes.CLEAR_CITY_SUGGESTION
    }
    expect(action.clearCitySuggestion()).toEqual(expectedAction)
  })
})
