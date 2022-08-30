// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppItem} = props

  const {appName, imageUrl} = eachAppItem

  return (
    <li className="app-item-container ">
      <img src={imageUrl} alt={appName} className="app-item-image" />
      <br />
      <p className="app-item-title">{appName}</p>
    </li>
  )
}

export default AppItem
