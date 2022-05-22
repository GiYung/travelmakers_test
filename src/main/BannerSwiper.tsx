import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Pagination,
  Autoplay,
  Navigation,
  Controller,
} from "swiper";
import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { changeBanner } from "store/reducers/BannerCarousel";

function BannerSwiper() {
  const banners = useAppSelector((state) => state.banner);
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [slideIndex, setSlideIndex] = useState<number>(1);
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

  const slideLeft = useCallback(() => {
    if (swiper) {
      swiper.slidePrev();
    }
  }, [swiper]);
  const slideRight = useCallback(() => {
    if (swiper) {
      swiper.slideNext();
    }
  }, [swiper]);

  return (
    <div className="section-carousel">
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
        {banners.map((banner) => (
          <SwiperSlide key={banner.description}>
            <img src={banner.images} alt={banner.description}></img>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slide-control">
        <div>
          <div className="slide-counter">
            <span>
              {slideIndex.toString()} / {banners.length.toString()}
            </span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div className="slide-btn left" onClick={slideLeft}>
            {"<"}
          </div>
          <div className="slide-btn right" onClick={slideRight}>
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSwiper;
