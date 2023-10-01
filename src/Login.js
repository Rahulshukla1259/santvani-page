import React from "react";

export default function Login() {
  return (
    <div>
      <div
        style={{
          borderBottom: "1px solid grey",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "1px 1px 1px 1px lightgrey",
        }}
        className="cont d-flex flex-end"
      >
        <div
          
          className="left mx-4 d-flex"
        >
          <div className="img_cont">
            <img
              className="mx-2"
              style={{ height: "25px" }}
              src="https://acharyaprashant.org/images/ic_videoseries.png"
              alt=""
            />
          </div>

          <div className="all mx-2">
            <div class="dropdown">
              <button
                style={{ border: "1px  solid lightgrey" }}
                class="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="search"> */}
          <nav class="navbar navbar-light bg-light">
            <form class="form-inline new-form d-flex">
              <input
                class="form-control inp mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div
                style={{ backgroundColor: "lightyellow" }}
                className="search border-outlined-success"
              >
                <span class="material-symbols-outlined mx-2 my-1">search</span>
              </div>
            </form>
          </nav>
          {/* </div> */}
        </div>
        <div style={{ marginRight: "25px" }} className="right">
          <button className=" new-btn d-flex">Login</button>
        </div>
      </div>
    </div>
  );
}
