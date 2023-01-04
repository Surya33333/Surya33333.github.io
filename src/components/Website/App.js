import './App.css';
import './main.css';
import NavBar from './navbar.js';
import { Link } from "react-router-dom";


function App() {
console.log("App");
  return (
    <body class="body">
    <div>
      <NavBar />

      <div class="main">
        <div class="content">
          <h1 class="head">SendIt Logistic Solutions.</h1>
          <p>Get started with our logistic solutions now, and get most valuble services through us from your comfort of zone.</p>
          <Link class="button" to="/register" style={{float:'left'}}>Register</Link>
        </div>
        <div class="image">
          image
        </div>

      </div>


  </div>

</body>

 );
}

export default App;
