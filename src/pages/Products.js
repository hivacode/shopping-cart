import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart, useCartActions } from "../Context/CartProvider";
import Layout from "../Layout/Layout";
import FilterAccordion from "../utils/FilterAccordion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import checkInCart from "../utils/CheckInCart";
const Products = () => {
  const { cart } = useCart();
  const param = useParams();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.digikala.com/v1/categories/${param.id}/search/`)

      .then((res) => {
        setData(res.data.data.products);
        setLoading(false);
      })
      .catch();
  }, []);

  //import cart context
  const dispatch = useCartActions();
  // add products handler
  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.title_fa} به سبد خرید شما اضافه شد`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  return (
    <>
      <Layout>
        {loading && <p>loading...</p>}
        <section className="mx-auto font-Iransans container w-full flex justify-between">
          <FilterAccordion />
          <div className="container mx-auto text-sm min-h-screen p-3 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {data.map((p) => (
              <div
                className="rounded-md shadow-sm  border-solid border-2 border-gray-100 hover:shadow-xl hover:bg-white transition-all p-2"
                key={p.id}
              >
                <div className="flex relative justify-center items-center flex-col w-full">
                  <img
                    className="w-44 sm:w-32 md:w-36 lg:w-52 object-cover h-auto bg-gray-50"
                    src={p.images.main.url}
                    alt={p.id}
                    title={p.title_fa}
                  />
                  <ul className="absolute left-2 top-0">
                    {p.colors.map((c, index) => (
                      <li
                        key={index}
                        style={{
                          backgroundColor: `${c.hex_code}`,
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          marginBottom: "5px",
                          opacity: 1,
                          outline: "none",
                        }}
                      ></li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-900 text-sm mt-5 truncate ">
                  {p.title_fa}
                </p>
                <div className="w-full  mt-2  flex justify-between items-center flex-row py-3">
                  <div className="flex order-2">
                    <span className="ml-1">
                      {new Number(
                        `${p.default_variant.seller.stars}`
                      ).toLocaleString("fa-ir")}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="truncate flex items-center">
                    {p.default_variant.shipment_methods.description}
                    <span className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </p>
                </div>
                <div className="mt-3 p-2 flex justify-between items-center text-sm">
                  {p.default_variant.price.discount_percent > 0 && (
                    <>
                      <p
                        className="w-10 h-6  rounded-2xl bg-red-500 text-white
                 font-bold flex justify-center items-center"
                      >
                        %
                        {Number(
                          `${p.default_variant.price.discount_percent}`
                        ).toLocaleString("fa-ir")}
                      </p>
                    </>
                  )}
                  <p className="text-bold tracking-wide">
                    {Number(
                      `${p.default_variant.price.selling_price}`
                    ).toLocaleString("fa-ir")}
                    ریال
                  </p>
                </div>
                <button
                  onClick={() => addProductHandler(p)}
                  className="block mt-3 text-sm text-bold bg-red-500 hover:bg-red-600
              transition-all text-white p-2 w-full rounded-md"
                >
                  {checkInCart(cart, p) ? "ادامه سفارش" : "افزودن به سبد خرید"}
                </button>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Products;
