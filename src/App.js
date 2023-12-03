import React from "react";

import Navbar from "./components/navBar/navBar.component";
import DashBoard from "./components/dashboard/dashboard.componet";
import Features from "./components/features/features.components";
import AddMore from "./components/addMore/addMore.component";
import FAQ from "./components/faq/faq.component";
import Pricing from "./components/pricing/pricing.component";

const App = () => {
  return (
    <div>
      <Navbar />
      <DashBoard />
      <Features />
      <AddMore />
      <FAQ />
      <Pricing />
    </div>
  );
};

export default App;
