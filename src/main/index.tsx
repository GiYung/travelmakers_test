import { useEffect } from "react";
import { getFrontData } from "serverApi";

//redux
import { useAppDispatch } from "hooks";
import { initCatalog } from "store/reducers/Catalogs";
import { initBanner } from "store/reducers/TopBanners";
import { changeBanner } from "store/reducers/BannerCarousel";

// components
import BannerSwiper from "./BannerSwiper";
import TopBar from "./TopBar";
import Banner from "./Banner";
import SectionBenefit from "./SectionBenefit";
import SectionHotels from "./sectionHotel";
import { Catalog } from "types/Catalog";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getData() {
      const result: any = await getFrontData();
      const response: any = result.data;
      dispatch(initCatalog(response.catalogs));
      dispatch(initBanner(response.banners));

      dispatch(
        changeBanner({
          currentIndex: 0,
          name: response.banners[0].name,
          description: response.banners[0].description,
          promotion: response.banners[0].promotion,
        })
      );
    }
    getData();
  }, [dispatch]);

  return (
    <div>
      <div className="main_topbar-carousel">
        <TopBar />
        <BannerSwiper />
        <Banner />
        <SectionBenefit />
        <SectionHotels />
      </div>
    </div>
  );
}

export default App;
