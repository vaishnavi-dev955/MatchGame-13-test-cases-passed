import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {TabItemDetails, UpdatingActiveTabId, isActiveTabId} = this.props
    const {displayText, tabId} = TabItemDetails
    const onClickTab = () => {
      UpdatingActiveTabId(tabId)
    }
    const ActiveClassNameButton = isActiveTabId
      ? 'activeButton'
      : 'NonActiveButton'
    return (
      <li>
        <button
          className={`tab-button ${ActiveClassNameButton}`}
          type="button"
          onClick={onClickTab}
        >
          {displayText}
          {isActiveTabId ? (
            <hr className="ActiveHrClass" />
          ) : (
            <hr className="NonActiveHrClass" />
          )}
        </button>
      </li>
    )
  }
}

export default TabItem
