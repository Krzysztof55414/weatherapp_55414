import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slice do jednostek temperatury
const tempSlice = createSlice({
  name: "temperature",
  initialState: { unit: "C" }, // stan poczatkowy celcujsz, setunit zmienia stan na F,K
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
});

// droga do ulub miast i wyszukiwania
const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    cities: JSON.parse(localStorage.getItem("favorites") || "[]"),
    searchTerm: "",
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const cityId = action.payload;
      if (state.cities.includes(cityId)) {
        state.cities = state.cities.filter((id) => id !== cityId);
      } else {
        state.cities.push(cityId);
      }
      localStorage.setItem("favorites", JSON.stringify(state.cities));
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

// eksportujemy akcje
export const { setUnit } = tempSlice.actions;
export const { toggleFavorite, setSearchTerm } = favoritesSlice.actions;

// konfiguracja store - laczy slice i dostarcza store do providera
export const store = configureStore({
  reducer: {
    temperature: tempSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});
