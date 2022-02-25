import React from "react";
import { useCart, useCartActions } from "../Context/CartProvider";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import svg from "../Asset/empty-cart.svg";
const Cart = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();
  const addItemHandler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeItemHandler = (item) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: item });
  };
  console.log(cart);
  if (!cart.length) {
    return (
      <Layout>
        <section className="bg-gray-50 h-screen">
          <div className="w-full h-96 flex flex-col justify-center items-center">
            <img className="w-52" src={svg} alt={svg} />
            <p className="mt-4 font-bold">سبد خرید شما خالی است!</p>
            <p className="mt-4">
              می توانید برای مشاهده محصولات به صفحه زیر مراجعه کنید.
            </p>

            <Link to="/">
              <button
                href="#"
                className="text-purple-700 inline-block mt-2 hover:text-md hover:text-purple-800 font-medium rounded-lg
                   px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-500"
              >
                مشاهده محصولات
              </button>
            </Link>
          </div>
        </section>
        );
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        <section className="container text-sm flex items-center mt-2 mx-auto p-2">
          <div className="w-2/3 border-2 p-2 border-gray-200 rounded-md shadow-lg flex items-center flex-col">
            {cart.map((c) => (
              <>
                <article className="flex w-full items-center">
                  <div className="sm:w-32 sm:h-32 w-full">
                    <img
                      className="w-full h-full"
                      src={c.images.main.url}
                      alt={c.title_fa}
                    />
                  </div>
                  <div className="flex items-center w-full justify-between p-2">
                    <h2 className="truncate">{c.title_fa}</h2>
                    <div className="w-32 border border-gray-200 flex justify-around items-center rounded-md py-2">
                      <button onClick={() => addItemHandler(c)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-500 "
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <span className="text-red-500 text-sm">
                        {Number(`${c.quantity}`).toLocaleString("fa-ir")}
                      </span>
                      <button onClick={() => removeItemHandler(c)}>
                        {c.quantity === 1 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M18 12H6"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                    <span>
                      {Number(
                        `${c.default_variant.price.selling_price * c.quantity}`
                      ).toLocaleString("fa-ir")}
                      تومان
                    </span>
                  </div>
                </article>
              </>
            ))}
          </div>
          <div className="mr-3 border border-gray-200">
            <h2 key={cart}>{total}</h2>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default Cart;
