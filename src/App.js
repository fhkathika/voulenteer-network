import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Events from './Pages/Events/Events';
import Headers from './Pages/Headers';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Headers></Headers>
      <Switch>
<Route exact path='/'>
  <Home></Home>
</Route>
<Route exact path='/home'>
  <Home></Home>
</Route>
<Route exact path='/donation'>
  <Donation></Donation>
</Route>
<Route exact path='/events'>
  <Events></Events>
</Route>
<Route exact path='/blog'>
  <Blog></Blog>
</Route>

      </Switch>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
