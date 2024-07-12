// Write your code here
import './index.css'
const SuggestionItem = props => {
  const {details, updateMove} = props
  const {suggestion} = details
  const move = () => {
    updateMove(suggestion)
  }

  return (
    <li className="item">
      <p>{suggestion}</p>
      <div className="icon-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="icon"
          onClick={move}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
