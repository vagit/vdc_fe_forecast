import ForecastGroup from 'components/ForecastGroup'
import { Container } from 'react-bootstrap'

function App() {
  const days = [
    {
      id:1,
      time: 'Mon 18',
      min: 20,
      max: 29,
      img: 'https://www.metaweather.com/static/img/weather/sn.svg'
    },
    {
      id: 2,
      time: 'Tue 19',
      min: 20,
      max: 29,
      img: 'https://www.metaweather.com/static/img/weather/sn.svg'
    },
    {
      id: 3,
      time: 'Wed 20',
      min: 20,
      max: 29,
      img: 'https://www.metaweather.com/static/img/weather/sn.svg'
    },
    {
      id: 4,
      time: 'Thu 21',
      min: 20,
      max: 29,
      img: 'https://www.metaweather.com/static/img/weather/sn.svg'
    },
    {
      id: 5,
      time: 'Fri 22',
      min: 20,
      max: 29,
      img: 'https://www.metaweather.com/static/img/weather/sn.svg'
    }
  ]
  return (
    <div className="App">
      <Container>
        <h2 className="txt-center pd-bottom-lg">5 Day Weather</h2>
        <ForecastGroup forecastDays={days} />
      </Container>
    </div>
  )
}

export default App
