import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Events from './Pages/Events/Events';
import Headers from './Pages/Headers';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Headers></Headers>
      <Switch>
<Route exact path='/'>
  <Home></Home>
</Route>
<Route  path='/home'>
  <Home></Home>
</Route>
<Route path='/donation'>
  <Donation></Donation>
</Route>
<PrivateRoute path='/events'>
  <Events></Events>
</PrivateRoute>
<Route  path='/blog'>
  <Blog></Blog>
</Route>
<Route  path='/login'>
  <Login></Login>
</Route>

      </Switch>
      
      </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
