import reducer from '../city'
import * as actionTypes from '../../actions/actionTypes'

describe('city reducer', () => {
  const initialState = {
    error: null,
    errorMsg: null,
    showCitySuggestionFlag: null,
    cityList: null,
    loading: null
  }
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
  it('should handle LOAD_CITY_PENDING', () => {
    expect(reducer(undefined, {
      type: actionTypes.LOAD_CITY_PENDING,
      loading: true
    })).toEqual({
      ...initialState,
      loading: true,
      showCitySuggestionFlag: true
    })
  })
  it('should handle LOAD_CITY_SUCCESS', () => {
    expect(reducer(undefined, {
      type: actionTypes.LOAD_CITY_SUCCESS,
      city: [{ a: 'a'}]
    })).toEqual({
      ...initialState,
      cityList: [{ a: 'a' }],
      loading: false,
      error: false,
      errorMsg: ''
    })
    expect(reducer(undefined, {
      type: actionTypes.LOAD_CITY_SUCCESS,
      city: []
    })).toEqual({
      ...initialState,
      cityList: [],
      loading: false,
      error: false,
      errorMsg: 'No results found'
    })
  })
  it('should handle LOAD_CITY_ERROR', () => {
    expect(reducer(undefined, {
      type: actionTypes.LOAD_CITY_ERROR,
      error: true
    })).toEqual({
      ...initialState,
      error: true,
      errorMsg: "No results found",
    })
  })
  it('should handle UPDATE_SHOW_CITY_SUGGESTION', () => {
    expect(reducer(undefined, {
      type: actionTypes.UPDATE_SHOW_CITY_SUGGESTION,
      showCitySuggestionFlag: true
    })).toEqual({
      ...initialState,
      showCitySuggestionFlag: true
    })
  })
  it('should handle CLEAR_CITY_SUGGESTION', () => {
    expect(reducer(undefined, {
      type: actionTypes.CLEAR_CITY_SUGGESTION
    })).toEqual({
      ...initialState,
      cityList: [],
      showCitySuggestionFlag: false
    })
  })
})
