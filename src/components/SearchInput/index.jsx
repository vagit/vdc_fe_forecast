import React, {Component, Fragment} from  'react'
import { Row, Col, FormControl } from 'react-bootstrap'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import axios from 'axios'
import moment from 'moment'
import styles from './index.module.css'
import ForecastGroup from 'components/ForecastGroup'
import Loading from 'components/UI/Loading'

class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.inputChangeHandle = debounce(this.inputChangeHandle, 500)
    this.state = {
      showCitySuggestionFlag: false,
      cityList: this.props.filteredSuggestion,
      forecastDays: [],
      isLoading: false
    }
  }

  clickHandle = (city) => {
    this.inputRef.current.value = city.title
    this.setState({ showCitySuggestionFlag: false })
    this.loadForecast5Days(city.woeid)
  }
  inputChangeHandle = (eValue) => {
    this.loadCity(eValue)
  }
  loadCity = async (keyword) => {
    if (!keyword) return
    try {
      const res = await axios.get(`location/search/?query=${keyword}`)
      if (res.data.length > 0) {
        this.setState({ 
          cityList: res.data,
          showCitySuggestionFlag: true,
          error: false,
          errorMsg: ''
        })
      } else {
        this.setState({ 
          cityList: res.data,
          showCitySuggestionFlag: true,
          error: false,
          errorMsg: 'No results found'
        })
      }
      
    } catch (err) {
      this.setState({ 
        cityList: [],
        error: true,
        errorMsg: 'No results found'
      })
    }
  }

  loadForecast5Days = async (woeid) => {
    if (!woeid) return
    try {
      this.setState({ 
        isLoading : true,
        forecastDays: []
      })
      const res = await axios.get(`location/${woeid}/`)
      if (res.data) {
        this.setState({
          forecastDays: this.transformForecastData(res.data),
          isLoading: false
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  transformForecastData = (data) => {
    let forecast = data.consolidated_weather
    const BASE_URL_ICON = 'https://www.metaweather.com/static/img/weather/'
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

  render() {
    let renderCitySuggestion = (city) => (<li onClick={() => this.clickHandle(city)} key={city.woeid}>{city.title}</li>)
    const renderEmptySuggestion = (msg) => (<li>{msg}</li>)
    const colPositionRelative = { position: 'relative'}
    return (
      <Fragment>
        <Row className="justify-content-md-center pd-bottom-lg">
        < Col lg="6" className="input"><FormControl onFocus={() => this.setState({ showCitySuggestionFlag: true })} onChange={(e) => this.inputChangeHandle(e.target.value)} ref={this.inputRef} placeholder={this.props.placeholder} /></Col>
        </Row>
        <Row className="justify-content-md-center">
          { this.state.showCitySuggestionFlag && <Col lg="6" style={colPositionRelative}>
            <ul className={`${styles.Suggestion} suggestion`}>
              { (this.state.error || this.state.errorMsg) && renderEmptySuggestion(this.state.errorMsg) }
              { this.state.cityList.map(city => renderCitySuggestion(city))}
            </ul>
          </Col> }
        </Row>
        <Loading show={this.state.isLoading} />
        <ForecastGroup forecastDays={this.state.forecastDays} />
      </Fragment>
    )
  }
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  filteredSuggestion: PropTypes.array.isRequired
}

SearchInput.defaultProps = {
  placeholder: 'Enter city',
  filteredSuggestion: []
}

export default SearchInput