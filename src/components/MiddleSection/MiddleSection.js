import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import CreateButton from "./CreateButton/CreateButton";

import Card from "../UI/Card/Card";
import "./MiddleSection.css";

function MiddleSection(props) {
  const ctx = useContext(AuthContext);
  return (
    <Card>
      <div className="section">
        {ctx.isLoggedIn && <CreateButton onClick={props.onshowCreateAirplane}/>}
        {/* <h1>More than 100 flights for every blah blah</h1>
        <p>They're waiting for you to get experienced together blah blah</p> */}
      </div>
    </Card>
  );
}

export default MiddleSection;
