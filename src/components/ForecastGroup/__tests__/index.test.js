import { shallow } from 'enzyme'
import ForecastGroup from 'components/ForecastGroup'
import ForecastTile from 'components/ForecastTile'

describe('Forecast Group', () => {
  let wrapper = null

  afterEach(() => {
    wrapper.unmount()
    wrapper = null
  })

  it('should render Forecast Group component correctly', () => {
    let props = {
      forecastDays: []
    }
    wrapper = shallow(<ForecastGroup {...props} />)
    expect(wrapper.find(ForecastTile)).toHaveLength(0)
    wrapper.setProps({
      forecastDays: [
        {
          id: 1,
          time: 'a',
          min: 1,
          max: 2,
          img: 'img.png'
        },
        {
          id: 2,
          time: 'b',
          min: 3,
          max: 4,
          img: ''
        }
      ]
    })
    expect(wrapper.find(ForecastTile)).toHaveLength(2)
  })
})
