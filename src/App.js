import React from "react";

import "./App.css";

import { cardsData } from "./components/UI/ExpandingCards/ExpandingData";
import ExpandingCards from "./components/UI/ExpandingCards/ExpandingCards";
import ClientDetails from "./components/ClientDetails/ClientDetails";
import AirplaneComponent from "./components/Airplane/AirplaneComponent";

import Popup from "./components/Header/PopUpSignUpForm";
import PilotComponent from "./components/Pilot/PilotComponent";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Popup />
        <ExpandingCards data={cardsData} />
         <AirplaneComponent />
          <PilotComponent />
      </header>
    </div>
  );
}

export default App;
