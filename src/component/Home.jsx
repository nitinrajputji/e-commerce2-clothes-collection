import React from "react";

const Home = () => {
  return (
    <>
      <div className="card bg-white text-white">
        <img
          src="./image/shopping.jpg"
          className="card-img"
          alt="backgound"
          height="550px"
        />
        <div className="card-img-overlay ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-dark ">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2 text-primary">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
