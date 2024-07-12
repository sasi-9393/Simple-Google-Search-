import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}
  change = event => {
    this.setState({searchInput: event.target.value})
  }
  updateMove = suggestion => {
    this.setState({searchInput: suggestion})
  }
  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg">
        <div className="img-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="img"
            alt="google logo"
          />
        </div>
        <div className="box">
          <div className="search-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="icon"
              alt="search icon"
            />
            <input
              type="search"
              className="input"
              onChange={this.change}
              value={searchInput}
            />
          </div>
          <ul className="list-con">
            {filteredList.map(each => (
              <SuggestionItem
                details={each}
                key={each.id}
                updateMove={this.updateMove}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
