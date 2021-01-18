import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import styles from './index.module.css'

const ForecastTile = ({ day }) => {
  if ( day === {} || !day ) return null
  return (
    <Card className={styles.Card}>
    <Card.Body>
      <Card.Title className="txt-center">
        {day.time} - Heavy Rain
      </Card.Title>
      <Card.Img
        className={styles.Image}
        src={day.img}
      ></Card.Img>
      <Card.Text className="txt-center">
        <strong>{day.max}°</strong> / {day.min}°
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

ForecastTile.propTypes = {
  day: PropTypes.object.isRequired
}

ForecastTile.defaultProps = {
  day: {}
}

export default ForecastTile
