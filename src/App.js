import ForecastGroup from 'components/ForecastGroup'

function App() {
  const days = [
    {
      id:1,
      time: 'Mon 18',
      min: 20,
      max: 29
    },
    {
      id: 2,
      time: 'Tue 19',
      min: 20,
      max: 29
    },
    {
      id: 3,
      time: 'Wed 20',
      min: 20,
      max: 29
    },
    {
      id: 4,
      time: 'Thu 21',
      min: 20,
      max: 29
    },
    {
      id: 5,
      time: 'Fri 22',
      min: 20,
      max: 29
    }
  ]
  return (
    <div className="App">
      <h2 className="txt-center pd-bottom-lg">5 Day Weather</h2>
      <ForecastGroup forecastDays={days} />
    </div>
  )
}

export default App
