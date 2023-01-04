import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, components , Routes} from "react-router-dom";
import './index.css';
import App from './components/Website/App';
import reportWebVitals from './reportWebVitals';
import Services from "./components/Website/services";
import Track from "./components/Website/track";
import Stores from "./components/Website/stores";
import Pricing from "./components/Website/pricing";
import Register from "./components/Website/register";
import Login from "./components/Website/login";
import UserDashboard from "./components/AdminPanel/AdminHome/AdminHome.js";
import List from "./components/AdminPanel/List/List.js";
import Account from "./components/AdminPanel/Account/Account.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


root.render(
  <BrowserRouter>
    <components>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="services" element={<Services />} />
      <Route path="track" element={<Track />} />
      <Route path="stores" element={<Stores />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />  
      <Route path="dashboard" element={<UserDashboard/>} />
      <Route path="orders" element={<List/>} />
      <Route path="account" element={<Account/>} />
      </Routes>  
    </components>
  </BrowserRouter>
);



reportWebVitals();
