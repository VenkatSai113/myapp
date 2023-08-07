import './index.css'
const MobileViewTabs=(props)=>{
    const { desktopTabList,updateActiveTabId,desktopTabItemsId}=props
    const {tabicon,TabId}=desktopTabList
    const activeTab=()=>{
        updateActiveTabId(TabId)
    }
    const activeTabclassName=desktopTabItemsId?"active-tab-item":""
    return(
        <div className={`explore-icon-div ${activeTabclassName}`} onClick={activeTab}>
        <p className='all-explore-icon-mobile-view'>{tabicon}</p>
        </div>
    )
}
export default MobileViewTabs