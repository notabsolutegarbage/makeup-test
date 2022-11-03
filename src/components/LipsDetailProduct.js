import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import axios from "axios";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const getProduct = async () => {
    //   setLoading(true);
    //   await fetch(
    //     `https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick/${id}`
    //   )
    //     .then((res) => {
    //       res.json();
    //     })
    //     .then((data) => {
    //       setProduct(data);
    //       console.log(data);
    //     });
    //   //   setProduct(await response.json());
    //   setLoading(false);
    // };
    // getProduct();
    const fetchData = async () => {
      const result = await axios(
        "https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick"
      );

      const productDetail = result.data.find(
        (array) => array.id === Number(id)
      );

      setProduct(productDetail);
    };
    fetchData();
  }, []);

  const Loading = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "200px",
          }}
        >
          <BarLoader color="#F47181" />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="detail">
          <div class="card h-500 text-center p-4" key={product.id}>
            <img
              src={product.api_featured_image}
              className="card-img-top"
              alt={product.title}
            />
            <p style={{ color: "black" }}>{product.id}</p>
            <div className="card-body">
              <div className="card-title mb-0 lead fw-bold">
                <h5 style={{ color: "black" }}>{product.brand}</h5>
                <h4 className="card-text" style={{ color: "#5A5D60" }}>
                  {product.name}
                </h4>
                <p>${product.price}</p>
                <h5 style={{ color: "#5A5D60" }}>
                  Category: {product.category}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default DetailProduct;
