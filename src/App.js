import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import CardComponent from './components/Card';
import OffCanvComponent from './components/OffCanv';
import BodyComponent from './components/Bdy';



function App() {
  return (
   
    <div id='oum' style={{ }}>
      <div id='home'>
     <h1 style={{marginTop: "6rem", marginLeft: "50rem"}}>Vítejte</h1>
    <NavbarComponent/>
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
