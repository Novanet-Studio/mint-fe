import React from "react";
import ReactDOM from "react-dom";
import Dpc from "./pages/Dpc";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass, fas, faShareNodes, faTag } from "@fortawesome/free-solid-svg-icons";
import { fab, faDiscord, faTwitter, } from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

library.add(fab, fas, faTwitter, faDiscord, faShareNodes, faTag, faMagnifyingGlass);

ReactDOM.render(
  <React.StrictMode>
    <Dpc />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
