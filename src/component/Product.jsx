import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Product = () => {
  const [data, setdata] = useState([]);
  //   const [loading, setloading] = useState(false);
  const [filter, setfilter] = useState(data);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      //   setloading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setdata(await response.clone().json());
        setfilter(await response.json());
        // setloading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updated = data.filter((val) => val.category === cat);

    setfilter(updated);
  };

  //   const Loading = () => {
  //     return <>loading.....</>;
  //   };
  const Showproducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => setfilter(data)}
          >
            All
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's clothing
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women clothing
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </div>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4 " key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink
                      to={`product/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <Showproducts />
        </div>
      </div>
    </>
  );
};

export default Product;
