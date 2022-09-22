import React from "react";

import "./App.css";

import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import BookingForm from "../src/components/Booking/BookingForm";
import MiddleSection from "../src/components/MiddleSection/MiddleSection";
import { cardsData } from "./components/UI/ExpandingCards/ExpandingData";
import ExpandingCards from "./components/UI/ExpandingCards/ExpandingCards";
import AirportComponent from "./components/Airport/AirportComponent";

// import AirplaneComponent from "./components/Airplane/AirplaneComponent";
// import AirportFlightComponent from "./components/AirportFlight/AirportFlightComponent";
// import CreateAirplaneComponent from "./components/Airplane/CreateAirplaneComponent"
import PilotComponent from "./components/Pilot/PilotComponent";
import PilotForm from "./components/Pilot/PilotForm";
import AirportForm from "./components/Airport/AirportForm"
import HttpPost from "./components/AirportFlight/AirportFlightComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MiddleSection />
        <ExpandingCards data={cardsData} />
        {/*<HttpPost />*/}
        {/* <AirplaneComponent />
        <CreateAirplaneComponent /> */}
         {/*<PilotForm />*/}
         {/* <PilotComponent />*/}
         {/*<AirportFlightComponent /> */}
          <AirportComponent />
        <AirportForm />

        <BookingForm />
        <Footer />
      </header>
    </div>
  );
}

export default App;