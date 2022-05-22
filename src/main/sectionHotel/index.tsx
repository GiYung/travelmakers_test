import LocalTap from "./LocalTap";
import HotelSwiper from "./HotelSwiper";

export default function SectionHotels() {
  return (
    <div className="section-local-hotel">
      <div className="header-section">
        <div className="line-left" />
        <p>Local Hotels</p>
        <div className="line-right" />
      </div>

      <LocalTap />

      <HotelSwiper />
    </div>
  );
}
