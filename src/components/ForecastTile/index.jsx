import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'

const ForecastTile = ({ day }) => (
  <Card>
    <Card.Body>
      <Card.Title>
        {day.time}
      </Card.Title>
      <Card.Img
        src={`img.svg`}
      ></Card.Img>
      <Card.Text>
        <strong>{day.max}°</strong> / {day.min}°
      </Card.Text>
    </Card.Body>
  </Card>
)

ForecastTile.propTypes = {
  day: PropTypes.object.isRequired
}

export default ForecastTile
