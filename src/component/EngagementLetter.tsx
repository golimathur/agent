import React from "react";
import Navigation from "../uicomponent/Navigation";
import Chat from "../uicomponent/Chat";
import Header from "../uicomponent/Header";
import Footer from "../uicomponent/Footer";
import Button from "../uicomponent/Button";
import Search from "../uicomponent/Search";


const EngagementLetter = () => {
    return (
        <div>
      <Button />
      <Search />
      <Header />
      <div style={{ marginLeft: 8, marginTop: "-62px" }}>
        <Navigation />
      </div>
      <div style={{ marginTop: 600 }}>
        <Footer />
      </div>
      <Chat />
    </div>
    )
}

export default EngagementLetter;