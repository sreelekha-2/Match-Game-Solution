import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId} = props

  const {tabId, displayText} = tabDetails

  const onTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li>
      <button onClick={onTabItem}>{displayText}</button>
    </li>
  )
}

export default TabItem
