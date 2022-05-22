//redux
import { useAppSelector } from "hooks";

export default function Banner() {
  const carousel = useAppSelector((state) => state.carousel);

  return (
    <div className="banner-title">
      <div className="card-main-title_pc">
        {carousel.currentIndex === 1 && (
          <div className="badge-label">
            <span>New</span>
          </div>
        )}

        <div className="headline">{carousel.name}</div>
        <div className="title">{carousel.description}</div>
        <div className="subheadline">{carousel.promotion}</div>
        <div className="btn-text">
          <div className="frame">
            <div className="labelvalign-text-middleptserif-normal-outer-space-24px">
              GO
            </div>
          </div>
          <div className="underline"></div>
        </div>
      </div>
    </div>
  );
}
