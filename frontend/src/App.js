import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen from "./screens/SigninScreen";
import PartnerCard from "./components/PartnerCard";
import PartnerScreen from "./screens/PartnerScreen";
import MapScreen from "./screens/MapScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="parent-height">
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/user/:id" component={ProfileScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/partner/:id" component={PartnerScreen} />
          <Route path="/map" component={MapScreen} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
