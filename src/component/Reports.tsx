import React from "react";
import { Bar } from "react-chartjs-2";
import Navigation from "../uicomponent/Navigation";
import Chat from "../uicomponent/Chat";
import Header from "../uicomponent/Header";
import Footer from "../uicomponent/Footer";
//import Button from "../uicomponent/Button";
import Search from "../uicomponent/Search";
import "../App.css";
import {PieChart} from 'react-minimal-pie-chart';

const Reports: React.FC = () => {
  return (
    <div>
      {/* <Button /> */}
      <div style={{float: 'right' ,marginTop: 5, marginRight: 200}}>
      <Search/>
      </div>
      <Header />
      <p className="rep" style={{color: "#0078d4"}}>Reports</p>
      <Graph />
      
      <div style={{ marginTop: "-66px", marginLeft: 8 }}>
        <Navigation />
      </div>
      <div style = {{ marginLeft: 250,width: 400, marginTop: -700}}>
      <Dough />
      </div>
      <div style = {{marginTop: 400}}> 
      <Footer />
      </div>
      <Chat />
    </div>
  );
};

const Graph = () => {
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Data",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  return (
    <div
      style={{
        display: "block",
        width: "700px",
        height: "500px",  
        float: "right",
      }}
    >
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Data per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};



const Dough = () => {
  return (
    <PieChart
      data={[
        {
        title: "Paypal",
        value: 25, 
        backgroundColor:'red',
        color:'#E38627',
       },

        {
        title: "Paytm", 
        value: 15,
        backgroundColor:'blue',
        color:'#C13C37',
       
      },

      {      
        title: "PayZapp",
        value: 20,
        backgroundColor: 'yellow',
        color:'#6A2135',
        
        
      },

        {
          title: "Google Pay",
          value: 20,
          backgroundColor: 'black',
          color:'#f7f7f6',
         
        },

        {
          title: "PhonePay",
          value: 5,
          backgroundColor: 'orange',
          color: '#6A2135',
         
        },
      ]}
    />
  );
};

export default Reports;
