import React from "react";

import Navbar from "./components/navBar/navBar.component";
import DashBoard from "./components/dashboard/dashboard.componet";
import Features from "./components/features/features.components";

const App = () => {
  return (
    <div>
      <Navbar />
      <DashBoard />
      <Features />
    </div>
  );
};

export default App;
