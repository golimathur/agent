import React, { Component } from "react";
import "./App.css";
import Header from "./uicomponent/Header";
import Footer from "./uicomponent/Footer";
import Navigation from "./uicomponent/Navigation";
import Button from "./uicomponent/Button";
import Search from "./uicomponent/Search";
import CardSection from "./CardSection";
import OperationsTables from "./OperationsTables";
import Chat from "./uicomponent/Chat";

function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm-1 ms-xl1">
          <Header />
          <Navigation />
        </div>
        <div className="topheader">
          {/* <Button /> */}
          <div style={{ float: "right", marginTop: -18, marginRight: 10 }}>
            <Search />
          </div>
        </div>
        <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
          <div className="ms-Grid-row">
            <CardSection />
            <OperationsTables />
          </div>
        </div>
      </div>
      <div></div>
      <Chat />
      <Footer />
    </div>
  );
}

export default App;
