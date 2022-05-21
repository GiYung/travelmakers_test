import { useEffect } from "react";
import { getFrontData } from "serverApi";

//redux
import { useAppDispatch, useAppSelector } from "hooks";
import { initCatalog } from "store/reducers/Catalogs";
import { initBanner } from "store/reducers/TopBanners";
import { changeBanner } from "store/reducers/Carousel";

// components
import SwiperBody from "./SwiperBody";
import TopBar from "./TopBar";
import Banner from "./Banner";
import SectionBenefit from "./SectionBenefit";

function App() {
  const dispatch = useAppDispatch();
  //   const catalogs = useAppSelector((state) => state.catalog);

  useEffect(() => {
    async function getData() {
      const response = await getFrontData();
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
        <div className="section-top-bar">
          <TopBar />
        </div>
        <div className="section-carousel">
          <SwiperBody />
        </div>
        <div className="banner-title">
          <Banner />
        </div>
        <SectionBenefit />

        {/* <div className="section-top-bar"></div>
        <div className="section-top-bar"></div>
        <div className="section-top-bar"></div> */}
      </div>
    </div>
  );
}

export default App;
