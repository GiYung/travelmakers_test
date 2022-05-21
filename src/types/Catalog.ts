export interface ItemPriceDetail {
  max_night: number;
  price: number;
  discount: number;
  sale_price: number;
  min_night: number;
  min_night_price: number;
  min_night_discount: number;
  min_night_sale_price: number;
}

export interface ItemPrice {
  is_price: boolean;
  is_coupon: boolean;
  price: Array<ItemPriceDetail>;
}

export interface Timesale {
  type: string;
  format: string;
  content: null;
  remaining: string;
  end_at: string;
}

export interface CatalogItem {
  type: string;
  hotel_id: number;
  hotel_price_scheme: string;
  star: number;
  first_image_position_y: number;
  image: string;
  name: string;
  description: string;
  subway_station: string;
  tags: Array<string>;
  events: Array<string>;
  price: ItemPrice;
  timesale: Array<Timesale>;
}

export interface Catalog {
  city: string;
  items: Array<CatalogItem>;
}
