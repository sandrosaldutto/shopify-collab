import './App.scss';
import Nav from './components/Nav/Nav';
import Categories from './components/Categories/Categories';
import Collaborators from './pages/Collaborators/Collaborators';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Categories}/>
          <Route path='/collaborators' component={Collaborators}/>
        </Switch>
       <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
