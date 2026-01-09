const weatherData = {
  1: {
    name: "Wrocław",
    icon: "cloud",
    current: { temp: 18, desc: "Zachmurzenie umiarkowane" },
    forecast: [
      { day: "Pn", min: 12, max: 18, icon: "cloud" },
      { day: "Wt", min: 13, max: 19, icon: "partly_cloudy_day" },
      { day: "Śr", min: 11, max: 17, icon: "cloud" },
      { day: "Cz", min: 10, max: 16, icon: "rainy" },
      { day: "Pt", min: 12, max: 18, icon: "cloud" },
    ],
    rain: "30% (2 mm)",
    wind: "15 km/h W",
    clouds: "60%",
  },

  2: {
    name: "Kościan",
    icon: "partly_cloudy_day",
    current: { temp: 17, desc: "Lekko pochmurno" },
    forecast: [
      { day: "Pn", min: 11, max: 17, icon: "cloud" },
      { day: "Wt", min: 12, max: 18, icon: "wb_sunny" },
      { day: "Śr", min: 10, max: 16, icon: "partly_cloudy_day" },
      { day: "Cz", min: 9, max: 15, icon: "rainy" },
      { day: "Pt", min: 11, max: 17, icon: "cloud" },
    ],
    rain: "20% (1 mm)",
    wind: "12 km/h SW",
    clouds: "50%",
  },

  3: {
    name: "Paryż",
    icon: "wb_sunny",
    current: { temp: 22, desc: "Słonecznie" },
    forecast: [
      { day: "Pn", min: 16, max: 22, icon: "wb_sunny" },
      { day: "Wt", min: 17, max: 23, icon: "wb_sunny" },
      { day: "Śr", min: 15, max: 21, icon: "partly_cloudy_day" },
      { day: "Cz", min: 14, max: 20, icon: "cloud" },
      { day: "Pt", min: 16, max: 22, icon: "wb_sunny" },
    ],
    rain: "0%",
    wind: "10 km/h E",
    clouds: "15%",
  },

  4: {
    name: "Nowy Jork",
    icon: "partly_cloudy_day",
    current: { temp: 20, desc: "Częściowe zachmurzenie" },
    forecast: [
      { day: "Pn", min: 14, max: 20, icon: "cloud" },
      { day: "Wt", min: 15, max: 21, icon: "partly_cloudy_day" },
      { day: "Śr", min: 16, max: 22, icon: "wb_sunny" },
      { day: "Cz", min: 15, max: 21, icon: "rainy" },
      { day: "Pt", min: 14, max: 20, icon: "cloud" },
    ],
    rain: "25% (2 mm)",
    wind: "18 km/h NW",
    clouds: "40%",
  },

  5: {
    name: "Kair",
    icon: "wb_sunny",
    current: { temp: 32, desc: "Upalnie i słonecznie" },
    forecast: [
      { day: "Pn", min: 26, max: 32, icon: "wb_sunny" },
      { day: "Wt", min: 27, max: 33, icon: "wb_sunny" },
      { day: "Śr", min: 28, max: 34, icon: "wb_sunny" },
      { day: "Cz", min: 27, max: 33, icon: "wb_sunny" },
      { day: "Pt", min: 26, max: 32, icon: "wb_sunny" },
    ],
    rain: "0%",
    wind: "8 km/h N",
    clouds: "5%",
  },

  6: {
    name: "Reykjavík",
    icon: "ac_unit",
    current: { temp: 5, desc: "Zimno, wietrznie" },
    forecast: [
      { day: "Pn", min: 1, max: 5, icon: "ac_unit" },
      { day: "Wt", min: 0, max: 4, icon: "cloud" },
      { day: "Śr", min: -1, max: 3, icon: "cloud" },
      { day: "Cz", min: 0, max: 4, icon: "rainy" },
      { day: "Pt", min: 1, max: 5, icon: "cloud" },
    ],
    rain: "40% (3 mm)",
    wind: "30 km/h N",
    clouds: "80%",
  },

  7: {
    name: "Toronto",
    icon: "cloud",
    current: { temp: 10, desc: "Chłodno i pochmurno" },
    forecast: [
      { day: "Pn", min: 6, max: 10, icon: "cloud" },
      { day: "Wt", min: 7, max: 11, icon: "partly_cloudy_day" },
      { day: "Śr", min: 5, max: 9, icon: "rainy" },
      { day: "Cz", min: 4, max: 8, icon: "cloud" },
      { day: "Pt", min: 6, max: 10, icon: "cloud" },
    ],
    rain: "35% (2 mm)",
    wind: "20 km/h W",
    clouds: "65%",
  },

  8: {
    name: "Dubaj",
    icon: "wb_sunny",
    current: { temp: 38, desc: "Skrajnie gorąco i słonecznie" },
    forecast: [
      { day: "Pn", min: 30, max: 38, icon: "wb_sunny" },
      { day: "Wt", min: 31, max: 39, icon: "wb_sunny" },
      { day: "Śr", min: 32, max: 40, icon: "wb_sunny" },
      { day: "Cz", min: 31, max: 39, icon: "wb_sunny" },
      { day: "Pt", min: 30, max: 38, icon: "wb_sunny" },
    ],
    rain: "0%",
    wind: "6 km/h SE",
    clouds: "0%",
  },
};

export default weatherData;
