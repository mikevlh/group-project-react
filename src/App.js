import React from "react";

import "./App.css";

import { cardsData } from "./components/UI/ExpandingCards/ExpandingData";
import ExpandingCards from "./components/UI/ExpandingCards/ExpandingCards";
import ClientDetails from "./components/ClientDetails/ClientDetails";
import AirplaneComponent from "./components/Airplane/AirplaneComponent";
import AirportFlightComponent from "./components/AirportFlight/AirportFlightComponent";

import Popup from "./components/Header/PopUpSignUpForm";
import PilotComponent from "./components/Pilot/PilotComponent";
import PilotForm from "./components/Pilot/PilotForm";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Popup />
        <ExpandingCards data={cardsData} />
        <AirplaneComponent />
           <PilotForm />
          <PilotComponent /> 
          
           <AirportFlightComponent />
      </header>
    </div>
  );
}

export default App;
