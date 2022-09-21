import React from "react";

import "./App.css";

import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import BookingForm from "../src/components/Booking/BookingForm";
import MiddleSection from "../src/components/MiddleSection/MiddleSection";
import { cardsData } from "./components/UI/ExpandingCards/ExpandingData";
import ExpandingCards from "./components/UI/ExpandingCards/ExpandingCards";

// import AirplaneComponent from "./components/Airplane/AirplaneComponent";
// import AirportFlightComponent from "./components/AirportFlight/AirportFlightComponent";
// import CreateAirplaneComponent from "./components/Airplane/CreateAirplaneComponent"
// import PilotComponent from "./components/Pilot/PilotComponent";
// import PilotForm from "./components/Pilot/PilotForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MiddleSection />
        <ExpandingCards data={cardsData} />

        {/* <AirplaneComponent />
        <CreateAirplaneComponent /> */}
        {/* <PilotForm />
          <PilotComponent />  */}
        {/* <AirportFlightComponent /> */}

        <BookingForm />
        <Footer />
      </header>
    </div>
  );
}

export default App;