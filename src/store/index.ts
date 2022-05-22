import { configureStore } from "@reduxjs/toolkit";
import carousel from "./reducers/BannerCarousel";
import catalog from "./reducers/Catalogs";
import banner from "./reducers/TopBanners";
import localHotels from "./reducers/LocalHotels";

const store = configureStore({
  reducer: {
    carousel,
    catalog,
    banner,
    localHotels,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
