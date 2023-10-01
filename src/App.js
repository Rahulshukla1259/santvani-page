import React from "react";
import Nav from "./Nav";
import Section1 from "./Section1";
import Faqs from "./Faqs";
import Video_series from "./Video_series";
import Other_video_series from "./Other_video_series";
import Nav_below from "./Nav_below";
import Login from "./Login";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Share from "./Share";

export default function App() {
  return (<div>
    <Nav/>
    <Nav_below/>
    <Login/>
    <Breadcrumb/>
    <Section1/>
    <Share/>
    <Video_series/>
    <Other_video_series/>
    <Faqs/>
    <Footer/>
  </div>)
}
