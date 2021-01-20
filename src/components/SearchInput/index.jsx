import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import * as actions from "../../store/actions"
import { Row, Col, FormControl } from "react-bootstrap"
import PropTypes from "prop-types"
import debounce from "lodash/debounce"
import styles from "./index.module.css"
export class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.inputChangeHandle = debounce(this.inputChangeHandle, 500)
  }

  clickHandle = (city) => {
    this.inputRef.current.value = city.title
    this.props.loadForecast5Days(city.woeid)
  };

  inputChangeHandle = (evt) => {
    const { value } = evt.target
    this.props.loadCity(value)
  };

  render() {
    const renderEmptySuggestion = (msg) => <li>{msg}</li>
    const colPositionRelative = { position: "relative" }
    return (
      <Fragment>
        <Row className="justify-content-md-center pd-bottom-lg">
          <Col lg="6" className="input">
            <FormControl
              onFocus={() => this.setState({ showCitySuggestionFlag: true })}
              onChange={this.inputChangeHandle}
              ref={this.inputRef}
              placeholder={this.props.placeholder}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          {this.props.showCitySuggestionFlag && (
            <Col lg="6" style={colPositionRelative}>
              <ul className={`${styles.Suggestion} suggestion`}>
                {(this.props.error || this.props.errorMsg) &&
                  renderEmptySuggestion(this.props.errorMsg)}

                {this.props.cityList.map((city) => (
                  <li onClick={() => this.clickHandle(city)} key={city.woeid}>
                    {city.title}
                  </li>
                ))}
              </ul>
            </Col>
          )}
        </Row>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.city.error,
    errorMsg: state.city.errorMsg,
    cityList: state.city.cityList,
    showCitySuggestionFlag: state.city.showCitySuggestionFlag,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCity: (keyword) => dispatch(actions.loadCity(keyword)),
    loadForecast5Days: (woeid) => dispatch(actions.loadForecast(woeid)),
    clearCitySuggestion: () => dispatch(actions.clearCitySuggestion()),
  }
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  filteredSuggestion: PropTypes.array.isRequired,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  cityList: PropTypes.array,
  showCitySuggestionFlag: PropTypes.bool,
  loadCity: PropTypes.func,
  loadForecast5Days: PropTypes.func,
  clearCitySuggestion: PropTypes.func,
  updateShowCitySuggestion: PropTypes.func,
}

SearchInput.defaultProps = {
  placeholder: "Enter city",
  filteredSuggestion: [],
  cityList: [],
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
