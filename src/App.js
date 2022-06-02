import './App.scss';
import Nav from './components/Nav/Nav';
import Categories from './components/Categories/Categories';
import Collaborators from './pages/Collaborators/Collaborators';
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
      </BrowserRouter>
      
    </div>
  );
}

export default App;
