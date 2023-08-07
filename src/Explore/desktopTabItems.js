import './index.css'

const DesktopTabItems=(props)=>{
    const {desktopTabList,updateActiveTabId,desktopTabItemsId}=props
    const { displaidText,tabicon,TabId}=desktopTabList
    const activeTab=()=>{
        updateActiveTabId(TabId)
    }
    const activeTabclassName=desktopTabItemsId?"active-tab-item":""
    return(
        <div className={`explore-icon-div ${activeTabclassName}`} onClick={activeTab}>
        <p className='explore-icon'>{tabicon}</p>
        <p className='explore-icon-text'>{displaidText}</p>
        </div>
    )
}
export default  DesktopTabItems