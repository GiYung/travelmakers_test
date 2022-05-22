import { CatalogItem } from "types/Catalog";
import Moment from "react-moment";
import NumberFormat from "react-number-format";

export default function HotelSlide(item: CatalogItem) {
  setInterval(() => {}, 1000);

  return (
    <div className="hotel_slide">
      <div className="content">
        <div className="content-body">
          <div className="keywordTags">
            {item.tags.map((tag, index) => (
              <div key={tag} className="tag">
                <span>{tag}</span>
              </div>
            ))}
          </div>
          <div className="title">
            <span className="hotel-name">{item.name}</span>
            <div className="grade">
              <img src="star.svg" alt="star" />
              <span>{item.star}성급 호텔</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="price-label">
            <span>정가 </span>
            <span style={{ textDecorationLine: "line-through" }}>
              <NumberFormat
                value={item.price.price[0].price}
                displayType={"text"}
                thousandSeparator={true}
              />
            </span>
            {item.price.is_coupon ? (
              <div className="coupon">
                <img src="saleCoupon.svg" alt="saleCoupon" />
                <span>쿠폰적용가</span>
              </div>
            ) : null}
          </div>
          <div className="price-discount">
            <span className="percent">{item.price.price[0].discount}%</span>
            <span className="group-price">
              <span className="price-after">
                <NumberFormat
                  value={item.price.price[0].sale_price}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </span>
              <span className="won">원~</span>
            </span>
            <span className="price-before">
              {"| 1박 "}
              <NumberFormat
                value={item.price.price[0].min_night_sale_price}
                displayType={"text"}
                thousandSeparator={true}
              />
            </span>
          </div>
        </div>
        {item.timesale.length > 0 ? (
          <div className="flash-sale">
            <img src="time.svg" alt="timer" />
            <p className="remaning">{item.timesale[0].remaining}</p>
            <p className="date">
              <Moment format={item.timesale[0].format} fromNow>
                {item.timesale[0].end_at}
              </Moment>
            </p>
          </div>
        ) : null}
        <div className="btn-text">
          <div className="frame">
            <div className="labelvalign-text-middleptserif-normal-outer-space-24px">
              GO
            </div>
          </div>
          <div className="underline"></div>
        </div>
      </div>

      <div className="thumbnail">
        <img src={item.image} alt={item.description} />{" "}
      </div>
      <div className="eventTags">
        {item.events.map((event, index) => (
          <div key={event} className="tag">
            <span>{event}</span>
          </div>
        ))}
      </div>
      <div className="description">{item.description}</div>
    </div>
  );
}
