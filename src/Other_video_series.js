import React, { useEffect, useState } from "react";

export default function Other_video_series() {
  let [relatedData, setRelatedData] = useState([]);
  let relatedVideodata = () => {
    fetch(
      "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3"
    )
      .then((res) => res.json())
      .then((response) => {
        setRelatedData(response.relatedContent);
      });
  };

  useEffect(() => {
    relatedVideodata();
  }, []);

  console.log(relatedData);

  return (
    <div className="my-4">
      <h5 className="mx-4">Other Helpful Video Series</h5>
      <div className="all_things d-flex flex-wrap ">
        {relatedData.map((data, i) => {
          return (
            <div
              class="card card_other_video d-flex mx-3 my-2"
              style={{ width: "30rem" }}
            >
              <div className="img_cont_1">
                <div className="img1 position-absolute ">
                  <img
                    src={
                      data.thumbnail.domain +
                      "/" +
                      data.thumbnail.basePath +
                      "/" +
                      "10" +
                      "/" +
                      data.thumbnail.key
                    }
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="img2 position-absolute">
                  <img
                    className=""
                    src={
                      data.thumbnail.domain +
                      "/" +
                      data.thumbnail.basePath +
                      "/" +
                      "10" +
                      "/" +
                      data.thumbnail.key
                    }
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="img3  position-absolute">
                  <img
                    className="img-shadow"
                    src={
                      data.thumbnail.domain +
                      "/" +
                      data.thumbnail.basePath +
                      "/" +
                      "10" +
                      "/" +
                      data.thumbnail.key
                    }
                    class="card-img-top"
                    alt="..."
                  />

                  <div
                    style={{ display: "flex", justifyContent: "flex-end" }}
                    className="sign_ap,position-absolute"
                  >
                    <img className="apsignature"
                      style={{
                        height: "30px",
                        width: "50px",
                        position: "absolute",
                        zIndex: "100",
                        marginTop: "-30px",
                        border: "none",
                      }}
                      src="https://acharyaprashant.org/images/ic_apsignature_hindi.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="card-body-cont">
                <div class="card-body">
                  <h5 class="card-title">{data.title}</h5>
                  <p class="card-text">{data.subtitle}</p>
                  {data.coursesCount != undefined && (
                    <p className="card-text">
                      {data.coursesCount + " " + "Video Series"}
                    </p>
                  )}

                  {data.coursesCount === undefined && (
                    <div>
                      <p>5 hours 18 minutes</p>
                      <p>Contribution:₹2700</p>
                      <span class="badge badge_lang">English</span>
                      <div className="links my-2">
                        <a
                          href="#"
                          class="card-link my-2 text-decoration-none "
                        >
                          Add to cart
                        </a>
                        <a
                          href="#"
                          class="card-link my-2 text-decoration-none "
                        >
                          Enrol
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
