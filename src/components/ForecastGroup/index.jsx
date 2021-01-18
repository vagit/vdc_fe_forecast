import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import ForecastTile from 'components/ForecastTile'

const ForecastGroup = ({ forecastDays }) => {
  let colDay = (day) => <Col xs={10} sm={2} key={day.id}><ForecastTile day={day} /></Col>
  return (
    <Row className="justify-content-md-center">
      { forecastDays.map((day) => colDay(day) ) } 
    </Row>
  )
}

ForecastGroup.propTypes = {
  forecastDays: PropTypes.array.isRequired
}

ForecastGroup.defaultProps = {
  forecastDays: []
}

export default ForecastGroup
