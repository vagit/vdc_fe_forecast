import { shallow } from 'enzyme'
import ForecastTile from 'components/ForecastTile'
import { Card } from 'react-bootstrap'

const day = {
  id: 1,
  time: 'Mon 18',
  min: 20,
  max: 29
}

describe('Forecast Tile', () => {
  let wrapper = shallow(<ForecastTile day={day} />)
  it ('should render Forecast Tile component correctly', () => {
    expect(wrapper.find(Card.Title)).toHaveLength(1)
    expect(wrapper.find(Card.Body)).toHaveLength(1)
    expect(wrapper.find(Card.Img)).toHaveLength(1)
    expect(wrapper.find(Card.Text)).toHaveLength(1)
  })
})
