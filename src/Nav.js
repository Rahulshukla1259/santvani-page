import React from "react";

import "./index.css";

export default function Nav() {
  return (
    <div>
      <nav
        style={{ backgroundColor: "#cc3300", height: "50px" }}
        class="navbar navbar-expand-lg sticky top-0 bg-brand-700"
      >
        <div className="container-fluid mx-3">
          <img
            style={{ width: "30px", height: "30px" }}
            className="mr-2 mx-2  rounded-full"
            src="https://acharyaprashant.org/images/ic_favicon.png"
            alt=""
          />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  style={{ fontWeight: "500" }}
                  className="nav-link text-white  active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  style={{ fontWeight: "500" }}
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Live session
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      style={{ fontWeight: "500" }}
                      className="dropdown-item"
                      href="#"
                    >
                      Bhagwad Gita
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ fontWeight: "500" }}
                      className="dropdown-item"
                      href="#"
                    >
                      Sant Sarita
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ fontWeight: "500" }}
                      className="dropdown-item"
                      href="#"
                    >
                      Ashtavakra samhita
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Bodh pratyusha
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  style={{ fontWeight: "500" }}
                  className="nav-link text-white"
                  href="#"
                >
                  Video Serise
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ fontWeight: "500" }}
                  className="nav-link text-white"
                  href="#"
                >
                  AP books
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ fontWeight: "500" }}
                  className="nav-link text-white"
                  href="#"
                >
                  AP articles
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  style={{ fontWeight: "500" }}
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Invite
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      style={{ fontWeight: "510" }}
                      className="dropdown-item"
                      href="#"
                    >
                      For A talk
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ fontWeight: "500" }}
                      className="dropdown-item"
                      href="#"
                    >
                      For An Interview
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  style={{ fontWeight: "500" }}
                  className="nav-link text-white"
                  href="#"
                >
                  In Media
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ fontWeight: "500" }}
                  className="nav-link  text-white"
                  href="#"
                >
                  Donate
                </a>
              </li>
            </ul>

            <div
              
              className="lang d-flex my-1"
            >
              <div className="lang_cont d-flex">
                <div class="dropdown d-flex">
                  <span
                   
                    className="lang_name text-white my-1"
                  >
                    HI
                  </span>
                  <button
                    style={{ border: "none", color: "white" }}
                    class="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        hindi
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <span class="material-symbols-outlined text-white my-1">
                call
              </span>
              <span class="material-symbols-outlined text-white bold my-1 d-flex">
                menu
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
