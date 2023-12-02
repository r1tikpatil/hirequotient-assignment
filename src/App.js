import React from "react";

import Navbar from "./components/navBar/navBar.component";
import DashBoard from "./components/dashboard/dashboard.componet";
import Features from "./components/features/features.components";
import AddMore from "./components/addMore/addMore.component";

const App = () => {
  return (
    <div>
      <Navbar />
      <DashBoard />
      <Features />
      <AddMore />
    </div>
  );
};

export default App;
