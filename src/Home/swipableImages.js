const SwipImages=(props)=>{
    const {multipleImages}=props
    console.log(multipleImages)
    
   
    return(
        <>
        {multipleImages === null? <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFx1pD-5y61mO3S-e1grpCuf24c6zMIGanYrbzcIwB&s" className="feed-image" />: <img alt="" src={`http://localhost:9000/${multipleImages}`} className="feed-image" />}
       
        </>
    )
}
export default SwipImages