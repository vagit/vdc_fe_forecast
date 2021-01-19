import { shallow } from 'enzyme'
import { FormControl } from 'react-bootstrap'
import SearchInput from 'components/SearchInput'

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
  it('should render component correctly', () => {
    let props = {
      placeholder: 'Enter keyword',
      filteredSuggestion: defaultSuggestion
    }
    let wrapper = shallow(<SearchInput {...props} />)
    const inputSearch = wrapper.find(FormControl)
    let suggestion = wrapper.find('.suggestion')
    expect(inputSearch).toHaveLength(1)
    expect(inputSearch.prop('placeholder')).toEqual('Enter keyword')
    expect(suggestion.children()).toHaveLength(2)

    wrapper.setProps({ filteredSuggestion : [] })
    suggestion = wrapper.find('.suggestion')
    expect(suggestion.children()).toHaveLength(0)
  })

  it('should render city suggestion correctly', () => {
    const props = {
      filteredSuggestion: defaultSuggestion
    }
    const wrapper = shallow(<SearchInput {...props} />)
    const firstCitySuggestion = wrapper.find('ul.suggestion').childAt(0)
    expect(firstCitySuggestion.text()).toEqual('London')
    expect(firstCitySuggestion.key()).toEqual('44418')
  })

  it('should binding event onClick for each suggestion', () => {
    const clickMock = jest.fn()
    const props = {
      filteredSuggestion: defaultSuggestion
    }
    const wrapper = shallow(<SearchInput {...props} />)
    wrapper.instance().clickHandle = clickMock
    wrapper.instance().inputRef = {
      current: {
        value: ''
      }
    }
    const firstCitySuggestion = wrapper.find('ul.suggestion').childAt(0)
    const secondCitySuggestion = wrapper.find('ul.suggestion').childAt(1)
    firstCitySuggestion.simulate('click')
    expect(clickMock).toHaveBeenCalled()
    secondCitySuggestion.simulate('click')
    expect(clickMock).toHaveBeenCalledTimes(2)
    expect(clickMock).toHaveBeenLastCalledWith(defaultSuggestion[1])

  })

  it('should change value of input when clicked on city suggestion', () => {
    const props = {
      filteredSuggestion: defaultSuggestion
    }
    const wrapper = shallow(<SearchInput {...props} />)
    wrapper.instance().inputRef = {
      current: {
        value: ''
      }
    }
    const firstCitySuggestion = wrapper.find('ul.suggestion').childAt(0)
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