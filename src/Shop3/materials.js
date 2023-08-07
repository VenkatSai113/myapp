import './index.css'
import {Link} from 'react-router-dom'

const Materials=(props)=>{
    const { matrtielsProp}=props
    const {materialImage,materialName}=matrtielsProp
    const materialClick=()=>{
      localStorage.setItem("materialName",materialName)
    }
    return(
        <div className="material-coloumn-div" onClick={materialClick}>          
       <Link to="/shopproducts"> <img src={materialImage} alt={materialName}className="material-image"/></Link>
        <p className='material-name'>{materialName}</p>
    </div>
    
    )
}
export default Materials