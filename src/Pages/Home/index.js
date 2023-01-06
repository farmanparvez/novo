import React from "react";
import Home from "./Home";
import Tagline from "./Tagline";
import CardSection from "./CardSection";
import OfferSection from "./OfferSection";
import img from "../../assets/image/lastimg.png";

const Index = () => {
  return (
    <div>
      <Home />
      <Tagline />
      <CardSection />
      <OfferSection />
      <div className="bg">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Index;
