import Aframes from './Aframes/index'
import { BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Viewer from "./View"
import TourCreator from "./TourCreator/index"
import TourCards from './TourCard/virtualTourGridView'
import OtpAuth from './OtpAuth'
import SignUp from './SignUp'
import ProtectedRoute from './ProtectedRoute';
import NotFound from './NotFound';
import Home from "./Home/index"
import InviteDesigner from "./Invitation/index"
import CreatePost from './CreatePost/index'
import Profile from './Profile/index'
import SimpleBottomNavigation from './Home/newBottomBar'
function App() {
  return (
    <>
   <BrowserRouter>
   <Switch>
   <Route exact path="/login" component={OtpAuth}/>
    <ProtectedRoute exact path="/virtualTours" component={Aframes}/>
    <Route exact path="/viewer:tour_id" component={Viewer}/>
    <ProtectedRoute exact path="/createtour" component={TourCreator}/>
    <ProtectedRoute exact path="/invitation" component={InviteDesigner}/>
    <ProtectedRoute exact path="/" component={Home}/> 
    <ProtectedRoute exact path="/savedTours" component={TourCards}/> 
    <ProtectedRoute exact path="/createpost" component={CreatePost}/> 
    <ProtectedRoute exact path="/hello" component={SimpleBottomNavigation}/> 
    <ProtectedRoute exact path="/profile" component={Profile}/> 
    <Route exact path="/signup" component={SignUp}/>
    <Route exact path="/not-found" component={NotFound}/>
    <Redirect to="/not-found"/>
    


    
   </Switch>
   
   </BrowserRouter>
   </>
  );
}

export default App;
