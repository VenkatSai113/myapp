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
import TestCreatePost from './CreatePost/TestCreatePost/index'
import NewTab from './CreatePost/TestCreatePost/newtab'
import Projects from './Projects/index'
import MobileViewComments from './Home/mobileViewComments'
import SavedPosts from './savedPost/index'
import OngoingProjects from './Projects/ongoingProjects'
import Spaces from './Projects/spaces'
import UpComingProjectCard from './Projects/upcomingProjects'
import CompletedProjects from './Projects/completedProjects'
import Explore from './Explore/index'
import GutterlessList from './Projects/estimateProjectList'
import EstimateList from './Projects/estimate'
import TrackingProject from './Projects/TrackingProject'
import EstimatePdfList from './Projects/estimatePdfList'
import AddProduct from './AddProduct';
import Shop3 from './Shop3'
import ShopProducts from './Shop3/Products/index'
import SingleProductView from './Shop3/SingleProductView/index'
import VirtualTourDetailView from './virtualTourDetailView/index'

function App() {
  return (
    <>
   <BrowserRouter>
   <Switch>
   <Route exact path="/login" component={OtpAuth}/>
    <ProtectedRoute exact path="/virtualTours" component={Aframes}/>
    <Route exact path="/viewer:tour_id" component={Viewer}/>
    <ProtectedRoute  exact path="/comments" component={MobileViewComments}/>
    <ProtectedRoute exact path="/createtour" component={TourCreator}/>
    <ProtectedRoute exact path="/invitation" component={InviteDesigner}/>  
    <ProtectedRoute exact path="/" component={Home}/> 
    <ProtectedRoute exact path="/sharedPost:selectedPostId1" component={Home}/>
    <ProtectedRoute exact path="/profilePosts:postId" component={Home}/> 
    <ProtectedRoute exact path="/savedTours" component={TourCards}/>  
    <ProtectedRoute exact path="/savedposts" component={SavedPosts}/>  
    <ProtectedRoute exact path="/createpost" component={CreatePost}/>
    <ProtectedRoute exact path="/projects" component={Projects}/> 
    <ProtectedRoute exact path="/hello" component={SimpleBottomNavigation}/> 
    <ProtectedRoute exact path="/tab" component={NewTab}/> 
    <ProtectedRoute exact path="/profile" component={Profile}/> 
    <ProtectedRoute exact path="/ongoingprojects" component={OngoingProjects}/> 
    <ProtectedRoute exact path="/upcomingProjects" component={UpComingProjectCard}/> 
    <ProtectedRoute exact path="/completedProjects" component={CompletedProjects}/> 
    <ProtectedRoute exact path="/spaces" component={Spaces}/>  
    <ProtectedRoute exact path="/explore" component={Explore}/> 
    <ProtectedRoute exact path="/projectList" component={ EstimateList}/>   
    <ProtectedRoute exact path="/projectTrack" component={ TrackingProject}/>   
    <ProtectedRoute exact path="/estimatepdflist" component={EstimatePdfList}/>  
    <ProtectedRoute exact path="/addproduct" component={AddProduct}/>   
    <ProtectedRoute  exact path="/shop" component={Shop3}/> 
    <ProtectedRoute  exact path="/shopproducts" component={ShopProducts}/> 
    <ProtectedRoute  exact path="/singleproductview" component={SingleProductView}/>   
    <ProtectedRoute  exact path="/VirtualtourdetailView:tour_id" component={VirtualTourDetailView}/>                    
    <Route exact path="/signup" component={SignUp}/>
    <Route exact path="/not-found" component={NotFound}/>       
    <Redirect to="/not-found"/>
   </Switch>
   </BrowserRouter>
   </>
  );
  }
export default App;
