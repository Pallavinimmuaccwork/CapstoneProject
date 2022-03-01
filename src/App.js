// import logo from './logo.svg';

import './App.css';
import Home from './Components/HomePage/Home';
import RegisterUser from './Components/AdminRegister/RegisterUser';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import { Route } from 'react-router-dom';
import AdminHomePage from './Components/AdminHomePage/AdminHomePage';

const App = () => {
  return (
    
    <div className="App bg-info">
      <div className='navstyle bg-info'>
        <Route>
          <Home />
        </Route>
        {/* <signup /> */}
        <Route path="/register-user">
          <RegisterUser />
        </Route>
        <Route path="/admin-login">
          <AdminLogin />
        </Route>
        <Route path="/admin-homepage">
          <AdminHomePage />
        </Route>


      </div>
    </div>
  );
}

export default App;
