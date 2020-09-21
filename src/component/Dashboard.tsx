import * as React from "react";
import "../App.css";
import Navigation from "../uicomponent/Navigation";
import Chat from "../uicomponent/Chat";
import Header from "../uicomponent/Header";
import Footer from "../uicomponent/Footer";
import Button from "../uicomponent/Button";
import Search from "../uicomponent/Search";

const Dashboard = () => {
  return (
    <div>
      <Button />
      <div style={{ float: "right", marginTop: -20, marginRight: 10 }}>
        <Search />
      </div>
      <Header />
      <p className="rep">Tasks</p>
      <div style={{ marginLeft: 8, marginTop: "-62px" }}>
        <Navigation />
      </div>
      <div style={{ marginTop: 120 }}>
        <Footer />
      </div>
      <Chat />
    </div>
  );
};

export default Dashboard;
