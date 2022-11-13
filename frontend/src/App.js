import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import AllRoutes from './Pages/AllRoutes/AllRoutes.jsx';
import   {useLocation} from "react-router-dom"


function App() {
  
  return (
    <div>
      <Navbar />
      <AllRoutes /> 
      
    </div>
  );
}

export default App;
