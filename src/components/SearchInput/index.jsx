import React, {Component, Fragment} from  'react'
import { Row, Col, FormControl } from 'react-bootstrap'
import PropTypes from 'prop-types'

class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  clickHandle(city) {
    this.inputRef.current.value = city.title
  }

  render() {
  let renderCitySuggestion = (city) => (<li onClick={() => this.clickHandle(city)} key={city.woeid}>{city.title}</li>)
    return (
      <Fragment>
        <Row className="justify-content-md-center pd-bottom-lg">
        < Col lg="6" className="input"><FormControl ref={this.inputRef} placeholder={this.props.placeholder} /></Col>
        </Row>
        <Row>
          <Col>
            <ul className="suggestion">{ this.props.filteredSuggestion.map(city => renderCitySuggestion(city))}</ul>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  filteredSuggestion: PropTypes.array.isRequired
}

SearchInput.defaultProps = {
  placeholder: 'Enter city',
  filteredSuggestion: []
}

export default SearchInput