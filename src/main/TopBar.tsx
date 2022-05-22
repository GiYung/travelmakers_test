import { useMediaQuery } from "react-responsive";

export default function TopBar() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <div className="section-top-bar">
      <div className="topbar_pc">
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="top_menu">
          <div className="search_input">
            <img src="/search.svg" alt="search" />
            <span>호텔 검색</span>
          </div>
          {isMobile ? <img src="user.svg" alt="user" /> : <div>마이페이지</div>}
        </div>
      </div>
    </div>
  );
}
