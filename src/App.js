import React from "react";
import Navbar from "./components/Navbar/Nabvar";
import "./App.scss";
import TourList from "./components/TourList";

function App() {
  return (
    <main className="tour-App">
      <Navbar />
      <TourList />
    </main>
  );
}

export default App;
