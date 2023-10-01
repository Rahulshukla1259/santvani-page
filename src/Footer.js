import React from "react";

import "./index.css";

import facebook from "./images/facebook-app-symbol.png";

import youtube from "./images/youtube.png";

import twitter from "./images/twitter(invert).png";

import wiki from "./images/wiki.png";

import insta from "./images/instagram (1).png";

import AP from "./images/AP-ICON.png";

import email from "./images/email (2).png";
import whatsapp from "./images/whatsapp (2).png";

import call from "./images/telephone.png";

export default function Footer() {
  return (
    <div className=" text-white main">
      <div
        style={{ justifyContent: "space-evenly", height: "300px"}}
        className=" text-white  d-flex my-4"
      >
        <div className="columns  my-4">
          <h5>LIVE EVENTS</h5>
          <p>Bhagwad gita</p>
          <p>Sant Sarita</p>
          <p>Ashtavakra Samhita</p>
          <p>Bodh Pratyusha</p>
        </div>
        <div className="columns my-4">
          <h5>WISDOM CONTENT</h5>
          <p>Video Series</p>
          <p>AP Books</p>
          <p>AP Articles</p>
          <p>AP Circle</p>
        </div>
        <div className="columns  my-4">
          <h5>LIVE EVENTS</h5>
          <p>About Acharya Prashant</p>
          <p>Invite Him</p>
          <p>Interview Him</p>
          <p>Bhagwad gita</p>
          <p>Ghar Ghar Upanishad</p>
          <p>Media and Public Interaction</p>
        </div>
        <div className="columns  my-4">
          <h5>MORE</h5>
          <p>About Acharya Prashant</p>
          <p>Invite Him</p>
          <p>Interview Him</p>
          <p>Ghar Ghar Upanishad</p>
          <p>Ghar Ghar Upanishad</p>
        </div>
        <div className="columns my-4">
          <h5>LIVE EVENTS</h5>
          <p>For English</p>
          <div className="icons">
            <img src={youtube} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={wiki} alt="" />
            <img src={insta} alt="" />
          </div>

          <p className="my-2">For Hindi</p>
          <div className="icons">
            <img src={youtube} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={wiki} alt="" />
            <img src={insta} alt="" />
          </div>
        </div>
        <div className="columns  my-4">
          <h5>DOWNLOAD APP</h5>
          <div className="f_a_icon d-flex">
            <img src={AP} alt="" />
            <p>Acharya prashant</p>
          </div>
          <div className="playstore">
            <img
              src="https://acharyaprashant.org/images/ic_googleplay.png"
              alt=""
            />
            <img
              src="https://acharyaprashant.org/images/ic_appstore.png"
              alt=""
            />
          </div>
        </div>
        <div className="columns my-4">
          <h5>CONTACT US</h5>
          <div className="email d-flex">
            <img src={email} alt="" />
            <p className="mx-2">www.advait.org.in</p>
          </div>
          <div className="whatsapp d-flex">
            <img src={whatsapp} alt="" />
            <p className="mx-2">8798768888</p>
          </div>
          <div className="call d-flex">
            <img src={call} alt="" />
            <p className="mx-2">8798768888</p>
          </div>
        </div>
      </div>
      <center>
        <div className="line"></div>
      </center>
      <center>
        <div className="cpy-items">
          <span>Copyright © 2022 PrashantAdvait Foundation</span>
          <span>Terms & Conditions | Privacy Policy</span>
        </div>
      </center>
    </div>
  );
}
