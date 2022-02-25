import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Layout from "../Layout/Layout";
const Slider = () => {
  return (
    <Layout>
      <div className="container hover:cursor-pointer mt-2  mx-auto p-2 flex justify-center items-center rounded-lg">
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 500,
          }}
          navigation={true}
        >
          <SwiperSlide>
            <img
              className="sm:w-screen sm:h-80 w-full h-full rounded-lg"
              src={
                "https://dkstatics-public.digikala.com/digikala-adservice-banners/668fc4523e7e47bb754797f305566a2890b31aff_1645177388.jpg?x-oss-process=image/quality,q_95"
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="sm:w-screen sm:h-80 w-full h-full rounded-lg"
              src={
                "https://dkstatics-public.digikala.com/digikala-adservice-banners/15c2cd489974fb0084ee0e3c7a52ab6c3bd5a6e0_1645025748.jpg?x-oss-process=image/quality,q_95"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="sm:w-screen sm:h-80 w-full h-full rounded-lg"
              src={
                "https://dkstatics-public.digikala.com/digikala-adservice-banners/0f2c760f67cefbd00a25a151651f894924bea57d_1645177192.jpg?x-oss-process=image/quality,q_95"
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Layout>
  );
};

export default Slider;
