import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Order from './components/Customer/Order/Order';
import OrderList from './components/Customer/OrderList/OrderList';
import Review from './components/Customer/Review/Review';
import AddService from './components/Admin/AddService/AddService';
import AllOrderList from './components/Admin/AllOrderList/AllOrderList';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import ManageOrder from './components/Admin/ManageService/ManageService'
import ManageService from './components/Admin/ManageService/ManageService';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/order/:id">
            <Order></Order>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <PrivateRoute path="/orderList">
              <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/review">
              <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/allOrderList">
            <AllOrderList></AllOrderList>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path = '/manageService'>
            <ManageService></ManageService>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
