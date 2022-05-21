import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Pagination,
  Autoplay,
  Navigation,
  Controller,
} from "swiper";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { changeBanner } from "store/reducers/Carousel";

function SwiperBody() {
  const banners = useAppSelector((state) => state.banner);
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [slideIndex, setSlideIndex] = useState<Number>(1);
  const dispatch = useAppDispatch();

  const slideChange = useCallback(() => {
    if (swiper) {
      console.log("swiper slide change", swiper.activeIndex);
      const carouselIndex = swiper.realIndex;
      setSlideIndex(carouselIndex + 1);
      dispatch(
        changeBanner({
          currentIndex: carouselIndex,
          name: banners[carouselIndex].name,
          description: banners[carouselIndex].description,
          promotion: banners[carouselIndex].promotion,
        })
      );
    }
  }, [banners, dispatch, swiper]);

  return (
    <React.Fragment>
      <Swiper
        modules={[Pagination, Navigation, Autoplay, Controller]}
        pagination={{
          type: "progressbar",
        }}
        rewind={true}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={setSwiper}
        onSlideChangeTransitionEnd={slideChange}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={banner.description}>
            <img src={banner.images} alt={banner.description}></img>
          </SwiperSlide>
        ))}
        <div className="slide-counter">
          <span>
            {slideIndex.toString()} / {banners.length.toString()}
          </span>
        </div>
      </Swiper>
    </React.Fragment>
  );
}

export default SwiperBody;
