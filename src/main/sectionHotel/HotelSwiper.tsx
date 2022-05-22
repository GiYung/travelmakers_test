import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Autoplay,
  Navigation,
  Controller,
  Virtual,
} from "swiper";
import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "hooks";
import { CatalogItem } from "types/Catalog";
import HotelSlide from "./HotelSlide";

export default function SwiperBody() {
  const { localIndex } = useAppSelector((state) => state.localHotels);
  const totalCatalog = useAppSelector((state) => state.catalog);

  const [items, setItems] = useState<Array<CatalogItem>>([]);
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [slideIndex, setSlideIndex] = useState<number>(1);

  useEffect(() => {
    if (totalCatalog.length !== 0) {
      setItems(totalCatalog[localIndex].items);
      swiper && swiper.slideTo(0);
    }
  }, [items, localIndex, swiper, totalCatalog]);

  const slideChange = useCallback(() => {
    if (swiper) {
      const carouselIndex = swiper.realIndex;
      setSlideIndex(carouselIndex + 1);
    }
  }, [swiper]);

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
    <div className="card-hotel-featured_pc">
      <Swiper
        modules={[Navigation, Autoplay, Controller, Virtual]}
        rewind={true}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={setSwiper}
        onSlideChangeTransitionEnd={slideChange}
        virtual
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.hotel_id} virtualIndex={index}>
            <HotelSlide {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slide-control">
        <div className="slide-btn left" onClick={slideLeft}>
          {"<"}
        </div>
        <div className="slide-counter">
          <span>
            {slideIndex.toString()} / {items.length.toString()}
          </span>
        </div>
        <div className="slide-btn right" onClick={slideRight}>
          {">"}
        </div>
      </div>
    </div>
  );
}
