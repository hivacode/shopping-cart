import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link} from "react-router-dom";
import axios from "axios";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3002/products")
      .then((res) => {
        setProducts(res.data.data.recommendation_sub_categories);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  console.log(products);

  return (
    <Layout>
        <div className="container mx-auto">
          <h1 className="text-md sm:text-2xl text-center mb-5 p-5 font-bold">
            خرید بر اساس دسته‌بندی
          </h1>
          <section className="container mx-auto min-h-screen grid grid-cols-1 sm:grid-cols-3 md:gap-x-2 lg:grid-cols-4 gap-y-12">
            {products.map((p) => (
              <Link to={`category/${p.code}`} key={p.id}>
                <div
                  className="mx-auto flex justify-center items-center flex-col mt-3 w-full sm:w-52 md:w-56 lg:w-60"
                  key={p.id}
                >
                  <img
                    className="w-1/2 sm:w-60 md:w-2/3"
                    src={p.top_product_image}
                    alt={p.top_product_image}
                  />
                  <p className="mt-5 text-sm md:text-md">{p.title_fa}</p>
                </div>
              </Link>
            ))}
          </section>
        </div>
    </Layout>
  );
};

export default Category;
