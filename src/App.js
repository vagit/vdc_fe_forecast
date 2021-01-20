import PropTypes from "prop-types"
import SearchInput from "components/SearchInput"
import ForecastGroup from "components/ForecastGroup"
import Loading from "components/UI/Loading"
import { connect } from "react-redux"
import { Container } from "react-bootstrap"

function App({ forecastDays, loading }) {
  const filteredSuggestion = []
  return (
    <div className="App">
      <Container>
        <h2 className="txt-center pd-bottom-lg">5 Day Weather</h2>
        <SearchInput filteredSuggestion={filteredSuggestion} />
        <Loading show={loading} />
        <ForecastGroup forecastDays={forecastDays} />
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    forecastDays: state.forecast.forecastDays,
    loading: state.forecast.loading,
  }
}
App.propTypes = {
  loading: PropTypes.bool,
  forecastDays: PropTypes.array,
}

export default connect(mapStateToProps)(App)
