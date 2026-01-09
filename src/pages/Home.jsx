import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite, setUnit } from "../store";
import { Link } from "react-router-dom";
import weatherData from "../data/weatherData";

export default function Home() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.cities);
  const unit = useSelector((state) => state.temperature.unit);
  const search = useSelector((state) => state.favorites.searchTerm);

  const cities = Object.entries(weatherData).map(([id, city]) => ({
    id: Number(id),
    name: city.name,
    temp: city.current.temp,
    icon: city.icon,
  })); //tworzy prosta linie miast i oddziela dane potrzebne do wyswietlenia od pelnego weatherdata


  const convertTemp = (tempC) => {
    if (unit === "F") return Math.round(tempC * 9 / 5 + 32);
    if (unit === "K") return Math.round(tempC + 273.15);
    return tempC;
  };


  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main style={{ padding: "32px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "32px", fontSize: "32px" }}>
        Prognoza pogody
      </h1>



      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        {["C", "F", "K"].map((u) => (
          <button
            key={u}
            onClick={() => dispatch(setUnit(u))}
            style={{
              margin: "0 6px",
              padding: "8px 18px",
              background: "#1a2831",
              color: "#e0e0e0",
              border: unit === u ? "2px solid #13a4ec" : "2px solid #1a2831",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            °{u}
          </button>
        ))}
      </div>


      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "24px",
        }} //kafelki z maistami
      >
        {filteredCities.map((city) => {
          const isFav = favorites.includes(city.id);

          return (
            <Link
              to={`/city/${city.id}`}
              key={city.id}
              style={{
                textDecoration: "none",
              }}
            >

              <div
                style={{
                  background: "#101c22",
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "transform 0.2s",
                  cursor: "pointer",
                }}
              >

                <div
                  style={{
                    alignSelf: "flex-end",
                    cursor: "pointer",
                    marginBottom: "12px",
                  }}
                  onClick={(e) => {
                    e.preventDefault(); // zapobiega nawigacji
                    e.stopPropagation(); // nie propaguje do wejscia na link
                    dispatch(toggleFavorite(city.id));
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: "28px",
                      color: isFav ? "#f5c542" : "#555",
                      fontVariationSettings: isFav ? "'FILL' 1" : "'FILL' 0",
                    }}
                  >
                    star
                  </span>
                </div>


                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "48px", color: "#38bdf8", marginBottom: "12px" }} //ikonka pogody
                >
                  {city.icon}
                </span>

                <span
                  style={{
                    color: "#e0e0e0",
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "12px",
                  }}
                >
                  {city.name}
                </span>

                <span style={{ fontSize: "24px", fontWeight: "600", color: "#38bdf8" }}>
                  {convertTemp(city.temp)}°{unit}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
