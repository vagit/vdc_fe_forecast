import PropTypes from "prop-types"
import { Row, Col } from "react-bootstrap"
import ForecastTile from "components/ForecastTile"

const ForecastGroup = ({ forecastDays }) => {
  return (
    <Row className="justify-content-md-center">
      {forecastDays.map((day) => (
        <Col
          key={day.id}
          xs={{ span: 10, offset: 1 }}
          md={{ span: 2, offset: 0 }}
        >
          <ForecastTile day={day} />
        </Col>
      ))}
    </Row>
  )
}

ForecastGroup.propTypes = {
  forecastDays: PropTypes.array.isRequired,
}

ForecastGroup.defaultProps = {
  forecastDays: [],
}

export default ForecastGroup
