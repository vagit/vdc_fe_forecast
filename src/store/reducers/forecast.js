import * as actionTypes from "../actions/actionTypes"
import { updateObject } from "../../shared/utility"
import moment from 'moment'

const initialState = {
  loading: false,
  forecastDays: []
}

const transformForecastData = (data) => {
  let forecast = data.consolidated_weather
  const BASE_URL_ICON = '/weather/'
  const FORMAT_DATE = 'ddd D'
  return forecast.slice(0, 5).reduce((result, day, index) => {
    if (index < 5) {
      result.push({
        id: day['id'],
        weatherDay: moment(day['applicable_date']).format(FORMAT_DATE),
        weatherState: day['weather_state_name'],
        weatherIcon: `${BASE_URL_ICON}${day['weather_state_abbr']}.svg`,
        weatherMax: Math.round(day['max_temp']),
        weatherMin: Math.round(day['min_temp'])
      })
    }
    return result
  }, [])
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_FORECAST_PENDING:
      return updateObject(state, {
        loading: action.loading,
        forecastDays: [],
      })
    case actionTypes.LOAD_FORECAST_ERROR:
      return updateObject(state, {})
    case actionTypes.LOAD_FORECAST_SUCCESS:
      return updateObject(state, {
        loading: false,
        forecastDays: transformForecastData(action.forecastDays),
      })
    default:
      return state
  }
}

export default reducers
