import * as React from "react";
import "../App.css";
import Navigation from "../uicomponent/Navigation";
import Chat from "../uicomponent/Chat";
import Header from "../uicomponent/Header";
import Footer from "../uicomponent/Footer";
import Search from "../uicomponent/Search";
import CardSection from "../CardSection";
import OperationsTables from "../OperationsTables";

const Dashboard = () => {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm-1 ms-xl1">
          <Header />

          <Navigation />
        </div>
        <div className="topheader">
          <div style={{ float: "right", marginTop: -50, marginRight: 10 }}>
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
};

export default Dashboard;
