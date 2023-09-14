import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import dataStartup from "../../data/Slider/startup-business-data.json";
import serviceOneImg from "../../assets/images/startup-bg-left.jpg";
import HeaderThree from "../../components/Header/HeaderThree";
import HeroVideo from "../../components/Hero/HeroVideo";
import Welcome from "../../components/WelcomeSection/Welcome";
import OurServices from "../../components/OurServices/OurServices";
import CounterOne from "../../components/Counters/CounterOne";
import OurServicesTwo from "../../components/OurServices/OurServicesTwo";
import TestimonialsTwo from "../../components/Testimonials/TestimonialsTwo";
import BlogSlider from "../../components/Blog/BlogSlider";
import FooterOne from "../../components/Footer/FooterOne";
import Portfolio from "../../components/Portfolio/Portfolio";
import HeadingSection from "../../components/HeadingSection/HeadingSection";

const StartupBusiness = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <HeaderThree />
      <Portfolio columns="3" layout="box" filter="false" space="true">
      </Portfolio>
      <HeroVideo data={dataStartup} />
      {/* <FooterOne /> */}
    </Loader>
  );
};

export default StartupBusiness;
