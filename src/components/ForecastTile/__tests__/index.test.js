import { shallow } from 'enzyme'
import ForecastTile from 'components/ForecastTile'
import { Card } from 'react-bootstrap'

const defaultForecast = {
  id: 1,
  time: 'Mon 18',
  min: 20,
  max: 29,
  weatherName: 'heavy rain',
  img: 'https://www.metaweather.com/static/img/weather/sn.svg'
}

describe('Forecast Tile', () => {
  let wrapper = null

  afterEach(() => {
    wrapper.unmount()
    wrapper = null
  })

  it ('should render Forecast Tile component correctly', () => {
    const day = defaultForecast
    wrapper = shallow(<ForecastTile day={day} />)
    expect(wrapper.find(Card.Title)).toHaveLength(1)
    expect(wrapper.find(Card.Body)).toHaveLength(1)
    expect(wrapper.find(Card.Img)).toHaveLength(1)
    expect(wrapper.find(Card.Text)).toHaveLength(1)
  })
  
  it('should render data into component correctly when lack of data', () => {
    let props = {
      day: null
    }
    wrapper = shallow(<ForecastTile {...props} />)
    expect(wrapper.type()).toEqual(null)
  })

  it('should render data fully', () => {
    let props = {
      day: defaultForecast
    }
    wrapper = shallow(<ForecastTile {...props} />)
    expect(wrapper.find(Card.Title).text()).toEqual('Mon 18 - Heavy Rain')
    expect(wrapper.find(Card.Img).html()).toEqual(`<img class="card-img Image" src="${props.day.img}"/>`)
    expect(wrapper.find(Card.Text).html()).toEqual(`<p class="txt-center card-text"><strong>${props.day.max}°</strong> / ${props.day.min}°</p>`)
  })
})
