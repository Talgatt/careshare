import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen from "./screens/SigninScreen";
import PartnerCard from "./components/PartnerCard";
import PartnerScreen from "./screens/PartnerScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-containter">
        <header className="header-footer-at-registration">
          <h1 id="header-title">KidShare Registration</h1>
          <div>
            <Link to="/">KIDSHARE</Link>
          </div>
          <div>
            <Link to="/profile">Profile</Link>
            <Link to="/family-search">Search Family</Link>
          </div>
        </header>

        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/user/:id" component={ProfileScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/partner/:id" component={PartnerScreen} />
        </main>
        <footer className="header-footer-at-registration">
          <h4 className="footer-text">KidShare Corp.</h4>
          <p className="footer-text">All rights reserved</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
