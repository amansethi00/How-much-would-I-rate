import React, { useState } from "react";
import "./styles.css";
var list = {
  books: {
    "Rich Dad Poor Dad": "4/5",
    "The Alchemists": "3.5/5",
    "The Leader who had no title": "4/5",
    "Think and Grow Rich": "3.5/5",
    "Eloquent Javascript": "5/5"
  },
  movies: {
    Ludo: "4.5/5",
    "Dil Bechara": "4/5",
    War: "4/5",
    Andhadhun: "5/5",
    Sanju: "4.5/5",
    "Angreji Medium": "4/5",
    "Black Panther": "4/5",
    "Avengers Infinity war": "4.5/5",
    "Avengers-End-Game": "4/5",
    "X-men Dark Phoenix": "3.5/5"
  },
  webSeries: {
    "Scam 1992": "5/5",
    "Mirzapur-1": "5/5",
    "Mirzapur-2": "3.5/5",
    "Friends(all seasons)": "5/5",
    Panchayat: "5/5"
  }
};

var topiclist = Object.keys(list);

export default function App() {
  var [view, setView] = useState(list["books"]);
  var [viewKey, setViewKey] = useState(Object.keys(view));
  // var viewKey = Object.keys(view);

  // consnole.log(view);
  // consnole.log(view[0])
  function clickHandler(item) {
    var view = list[item];
    setView(view);
    var viewKey1 = Object.keys(view);
    setViewKey(viewKey1);
  }
  return (
    <div className="App">
      <h1>How much would I rate? </h1>
      <div className="container">
        <h2>
          Collection of Books,Movies and Web-series that Aman has enjoyed during
          lockdown.
        </h2>
      </div>
      <h2>
        {topiclist.map(function (item) {
          return (
            <li
              style={{ display: "inline", padding: "0 2rem" }}
              onClick={() => clickHandler(item)}
              key={item}
            >
              <button>{item}</button>
            </li>
          );
        })}
      </h2>
      <div id="useroutput">
        {viewKey.map((value, index) => {
          return (
            <li key={index} id="output">
              {value} ➡ {view[value]}
            </li>
          );
        })}
      </div>
    </div>
  );
}
