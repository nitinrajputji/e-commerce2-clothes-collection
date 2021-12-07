import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);

  console.log(productData.title);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProductData(await response.json());
    };

    getProduct();
  }, []);

  const ShowSingleProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={productData.image}
            alt={productData.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className=" text-uppercase text-black-50">
            {productData.category}
          </h4>
          <h1 className="display-5">{productData.title}</h1>
          <p className="lead fw-bolder">
            Rating{productData.rating && productData.rating.rate}
            <i className="fa fa-star"></i>
          </p>

          <h3 className="display-6 fw-bold my-4">${productData.price}</h3>
          <p className="lead">{productData.discription}</p>
          <button className="btn btn-outline-dark px-4 py-2">
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">
            GO to Cart
          </NavLink>
        </div>
        ;
      </>
    );
  };
  return (
    <>
      <div className="container py-5">
        <div className="row py-4">
          <ShowSingleProduct />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
