// Write your code here

import './index.css'

const TabItem = props => {
  const {eachTabItem, updatedTabId, isActive} = props

  const {displayText, tabId} = eachTabItem

  const categoryFilteredApps = () => {
    updatedTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        className={`tab-btn ${activeTabClassName}`}
        type="button"
        onClick={categoryFilteredApps}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
