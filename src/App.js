import React, { useContext, useState } from "react";

import "./App.css";

import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import BookingForm from "../src/components/Booking/BookingForm";
import MiddleSection from "../src/components/MiddleSection/MiddleSection";
import { cardsData } from "./components/UI/ExpandingCards/ExpandingData";
import ExpandingCards from "./components/UI/ExpandingCards/ExpandingCards";
import AirportComponent from "./components/Airport/AirportComponent";

// import AirportFlightComponent from "./components/AirportFlight/AirportFlightComponent";
import PilotComponent from "./components/Pilot/PilotComponent";
import PilotForm from "./components/Pilot/PilotForm";
import AirportForm from "./components/Airport/AirportForm"
import HttpPost from "./components/AirportFlight/AirportFlightComponent";
// import ClientComponent from "./components/Client/ClientComponent";
// import ClientForm from "./components/Client/ClientForm";
import AuthContext from "./store/auth-context";
import Airplane from "./components/Airplane/Airplane";
import Login from "./components/Login/Login";
import CreateAirplane from "./components/Airplane/CreateAirplane";
import Pilot from "./components/Pilot/Pilot";
import CreatePilot from "./components/Pilot/CreatePilot";
import Client from './components/Client/Client.js'
import Airport from './components/Airport/Airport'
import LoginAdmin from "./components/Login/LoginAdmin";
import CreateAirport from './components/Airport/CreateAirport'
import RegisterClient from './components/Client/RegisterClient.js'


function App() {
  const ctx = useContext(AuthContext);
  const [adminFormIsShown, setAdminFormIsShown] = useState(false);
  const [airplaneFormIsShown, setAirplaneFormIsShown] = useState(false);

  const showAdminFormHandler = () => {
    setAdminFormIsShown(true);
  };

  const hideAdminFormHandler = () => {
    setAdminFormIsShown(false);
  };

  const showCreateAirplaneHandler = () => {
    setAirplaneFormIsShown(true);
  };

  const hideCreateAirplaneHandler = () => {
    setAirplaneFormIsShown(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        {adminFormIsShown && <LoginAdmin onClose={hideAdminFormHandler} />}
        <Header onShowAdminForm={showAdminFormHandler}/>
        {airplaneFormIsShown && <CreateAirplane onClose={hideCreateAirplaneHandler} />}
        <MiddleSection onshowCreateAirplane={showCreateAirplaneHandler}/>
        {/* <ExpandingCards data={cardsData} /> */}
        
        {/* {!ctx.isLoggedIn && <Login />} */}
        {/* {ctx.isLoggedIn && <Airplane />}
        {ctx.isLoggedIn && <CreateAirplane />}
        {ctx.isLoggedIn && <Pilot />}
        {ctx.isLoggedIn && <CreatePilot />}
        {ctx.isLoggedIn && <Client />}
        {ctx.isLoggedIn && <Airport />}
        {ctx.isLoggedIn && <CreateAirport />}

        {/*<HttpPost />*/}
        {/* {ctx.isLoggedIn && <CreateAirplaneComponent />} */}
         {/*<PilotForm />*/}
         {/* <PilotComponent />*/}
         {/*<AirportFlightComponent />*/}
        {/*  <AirportComponent />*/}
        {/*<AirportForm />*/}
        {/*<ClientForm />*/}
        {/*  <ClientComponent />*/}
         {/*<AirportFlightComponent /> */}
         {/*  <AirportComponent />*/}
        {/*<AirportForm />*/}

        {/* <BookingForm /> */}
        <Footer />
      </header>
    </div>
  );
}

export default App;