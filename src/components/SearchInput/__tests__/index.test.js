import { shallow } from 'enzyme'
import { FormControl } from 'react-bootstrap'
import { SearchInput } from 'components/SearchInput'

const defaultSuggestion = [
  {
    title: 'London',
    woeid: 44418
  },
  {
    title: 'Barcelona',
    woeid: 753692
  }
]
describe('Search Input component', () => {
  let wrapper
  const props = {
    placeholder: 'Enter keyword',
    cityList: defaultSuggestion,
    showCitySuggestionFlag: true
  }
  beforeEach(() => {
    wrapper = shallow(<SearchInput {...props} />)
  })
  afterEach(() => {
    wrapper.unmount()
  })
  it('should render component correctly', () => {
    const inputSearch = wrapper.find(FormControl)
    let suggestion = wrapper.find('.suggestion')
    expect(inputSearch).toHaveLength(1)
    expect(inputSearch.prop('placeholder')).toEqual('Enter keyword')
    expect(suggestion.children()).toHaveLength(2)

    wrapper.setProps({ cityList: [] })
    suggestion = wrapper.find('.suggestion')
    expect(suggestion.children()).toHaveLength(0)
  })

  it('should render city suggestion correctly', () => {
    const firstCitySuggestion = wrapper.find('ul.suggestion').childAt(0)
    expect(firstCitySuggestion.text()).toEqual('London')
    expect(firstCitySuggestion.key()).toEqual('44418')
  })

  it('should binding event onClick for each suggestion', () => {
    const clickMock = jest.fn()
    const wrapper = shallow(<SearchInput {...props} />)
    wrapper.instance().clickHandle = clickMock
    wrapper.instance().inputRef = {
      current: {
        value: ''
      }
    }
    const suggestion = wrapper.find('ul.suggestion')
    const firstCitySuggestion = suggestion.childAt(0).find('Button')
    const secondCitySuggestion = suggestion.childAt(1).find('Button')

    firstCitySuggestion.simulate('click')
    expect(clickMock).toHaveBeenCalled()

    secondCitySuggestion.simulate('click')
    expect(clickMock).toHaveBeenCalledTimes(2)

    expect(clickMock).toHaveBeenLastCalledWith(defaultSuggestion[1])

  })

  it('should change value of input when clicked on city suggestion', () => {
    wrapper.instance().inputRef = {
      current: {
        value: ''
      }
    }
    wrapper.setProps({
      loadForecast5Days: jest.fn()
    })
    const firstCitySuggestion = wrapper.find('ul.suggestion').childAt(0).find('Button')
    const input = wrapper.find('.input')
    firstCitySuggestion.simulate('click')
    expect(input).toHaveLength(1)
    expect(wrapper.instance().inputRef).toEqual(
      {
        current: {
          value: 'London'
        }
      }
    )
  })
})