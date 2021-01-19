import * as actionTypes from "./actionTypes"

export const loadForecastError = (bool) => {
  return {
    type: actionTypes.LOAD_FORECAST_ERROR,
    error: bool
  }
}

export const loadForecastStart = (bool) => {
  return {
    type: actionTypes.LOAD_FORECAST_PENDING,
    loading: bool,
  }
}

export const loadForecastSuccess = (data) => {
  return {
    type: actionTypes.LOAD_FORECAST_SUCCESS,
    forecastDays: data,
  }
}

export const loadForecast = (woeid) => ({
  type: actionTypes.LOAD_FORECAST,
  woeid: woeid,
})
