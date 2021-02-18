
import './App.css';
import Body from './Components/Body/Body'
import {Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePage from './Pages/CreatePage/CreatePage'
import Header from './Components/Header/Header'
import Home from './/Pages/Home/Home'
import Footer from './/Components/Footer/Footer'
function App() {
  return (
    <div className="App">
      
    <Header name="Linguistics"></Header>
     

    
     <Switch>
       <Route exact path="/"><Home/></Route>
       <Route exact path="/displaySession"><Body/>
       </Route>
       
       </Switch>
       <Switch><Route exact path="/createSession" component={CreatePage}></Route></Switch>

    <Footer></Footer>
    
      
    </div>
  );
}

export default App;
