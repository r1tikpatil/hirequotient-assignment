import React from "react";

import Navbar from "./components/navBar/navBar.component";
import DashBoard from "./components/dashboard/dashboard.componet";
import Features from "./components/features/features.components";
import AddMore from "./components/addMore/addMore.component";
import FAQ from "./components/faq/faq.component";
import Pricing from "./components/pricing/pricing.component";
import Testimonial from "./components/testimonial/testimonial.component";
import MissOut from "./components/missOut/missOut.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <div>
      <Navbar />
      <DashBoard />
      <Features />
      <AddMore />
      <FAQ />
      <Pricing />
      <Testimonial />
      <MissOut />
      <Footer />
    </div>
  );
};

export default App;
