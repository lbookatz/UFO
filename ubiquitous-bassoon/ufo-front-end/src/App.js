import "./App.css";
import Header from "./components/Header/header";
import Body from "./components/Body/body";
import Events from "./Pages/Events/";
import Locations from "./Pages/Locations/";
import Navigation from "./pageNavigation";
import img from "./img/whiteLogoAndTagline.png";
import { getUser } from "./Utils/user";
import { useState, useEffect } from "react";

function App() {

  const [user, setUser] = useState([])

  const getUser = async () => {
      const response = await fetch("http://localhost:5000/user", {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("MyToken")}` },
      });
      const data = response.json();
      setUser(data)

      console.log("fromdata")
      console.log(data)
      console.log("fromGet")
      console.log(user)
       };

  useEffect(() => {
    getUser();
  }, []);
  
  return (
    <div>
      <div>
        <img className={"logo"} src={img} alt="website logo" />
        <Header />
        <Body />
        <Locations />
        <Navigation />
      </div>
    </div>
  );
}

export default App;
