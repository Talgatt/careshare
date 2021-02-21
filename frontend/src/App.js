import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen from "./screens/SigninScreen";

import Footer from "./screens/Footer";
import SearchScreen from "./screens/SearchScreen";


import PartnerCard from "./components/PartnerCard";
import PartnerScreen from "./screens/PartnerScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-containter">
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/profile" component={ProfileScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>

          <Route path="/family-search" component={SearchScreen}></Route>

          <Route path="/partner/:id" component={PartnerScreen} />

        </main>
      </div>
      <Footer/>
    </BrowserRouter>
       
  );
}

export default App;
