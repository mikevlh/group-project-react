import React from 'react';

import "./ExpandingCards.css";

var ExpandingCards = function (_a) {
    var data = _a.data;
    var _b = React.useState(1),
      activeId = _b[0],
      setActiveId = _b[1];
    var onClick = function (id) {
      return setActiveId(id);
    };
  
    return (
      <div className = "container" id ="content">
        {data.map((card) => (
          <div
            key={card.id}
            className = {`panel ${activeId === card.id ? "active" : ""}`}
            onClick = {() => onClick(card.id)}
            style = {{ backgroundImage: `url(${card.url})` }}
          >
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    );
  };
  
  export default ExpandingCards;