import "./App.css";
import React, { Component } from "react";
import NavBars from "./components/NavBars";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBars/>
        <News pageSize={5} />
      </div>
    );
  }
}