import axios from "axios"
import * as actionTypes from "../actions/actionTypes"
import { put, takeEvery, all } from "redux-saga/effects"
import * as cityActions from "../actions/city"
import * as forecastActions from "../actions/forecast"

export function* fetchCityList({ keyword }) {
  try {
    // debugger // eslint-disable-line no-debugger
    yield put(cityActions.loadCityPending(true))
    if (!keyword) {
      yield put(cityActions.loadCitySuccess([]))
      return
    }
    const endpoint = `location/search/?query=${keyword}`
    const response = yield axios.get(endpoint)
    yield put(cityActions.loadCitySuccess(response.data))
  } catch (error) {
    yield put(cityActions.loadCityError(true))
  }
}

export function* fetchWeather5Days({ woeid }) {
  try {
    yield put(cityActions.clearCitySuggestion())
    yield put(cityActions.updateShowCitySuggestion(false))
    yield put(forecastActions.loadForecastStart(true))
    const endpoint = `/location/${woeid}/`
    const response = yield axios.get(endpoint)
    yield put(forecastActions.loadForecastSuccess(response.data))
  } catch (error) {
    yield put(forecastActions.loadForecastError(true))
  }
}

export function* loadCity() {
  yield takeEvery(actionTypes.LOAD_CITY, fetchCityList)
}

export function* loadForecast() {
  yield takeEvery(actionTypes.LOAD_FORECAST, fetchWeather5Days)
}

export default function* weatherSaga() {
  yield all([loadCity(), loadForecast()])
}
