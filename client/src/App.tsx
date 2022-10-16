import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Wrappers from "./wrappers";
import Home from "./screens/Home";
import Appointments from "./screens/Appointments";
import CarouselWrapper from "./wrappers/CarouselWrapper";
import BottomNavbar from "./components/BottomNavbar";
import Perscriptions from "./screens/Perscriptions";
import MyHealth from "./screens/Perscriptions/MyHealth";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  return (
    <Wrappers>
      <Modal />
      <Navbar />
      <CarouselWrapper>
        <Appointments />
        <Home />
        <Perscriptions />
        <MyHealth />
      </CarouselWrapper>
      <BottomNavbar />
    </Wrappers>
  );
}

export default App;
