
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import CardComponent from './components/Card';
import OffCanvComponent from './components/OffCanv';
import BodyComponent from './components/Bdy';



function App() {
  return (
   
    <div>
      <div id='home'>
      <NavbarComponent/>
      <h1 style={{marginTop: "6rem", marginLeft: "50rem"}}>Vítejte</h1>
    <CardComponent/>
    <OffCanvComponent/>
    <CardComponent/>
    </div> 
    <div id='body'>
    <BodyComponent/>
    </div>
    
      
   
   
    


   
  
    </div>

  );
}

export default App;
