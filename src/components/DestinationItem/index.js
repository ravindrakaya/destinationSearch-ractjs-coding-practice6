// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  return (
    <li className="list-item">
      <img src={imgUrl} alt={name} className="image" />
      <p className="description">{name}</p>
    </li>
  )
}
export default DestinationItem
