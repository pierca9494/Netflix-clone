import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  }, // Aggiungi i tuoi reducer qui.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware), // Middleware aggiuntivo.
});
