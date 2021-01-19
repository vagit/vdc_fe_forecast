import SearchInput from 'components/SearchInput'
import { Container } from 'react-bootstrap'

function App() {
  const filteredSuggestion = []
  return (
    <div className="App">
      <Container>
        <h2 className="txt-center pd-bottom-lg">5 Day Weather</h2>
        <SearchInput filteredSuggestion={filteredSuggestion} />
      </Container>
    </div>
  )
}

export default App
