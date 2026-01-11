import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import weatherData from "../data/weatherData";

{/*dodaje miasta do ulub */}
export default function Favorites() {
  const favorites = useSelector((state) => state.favorites.cities);
  const unit = useSelector((state) => state.temperature.unit);

  const convertTemp = (tempC) => {
    if (unit === "F") return Math.round(tempC * 9 / 5 + 32);
    if (unit === "K") return Math.round(tempC + 273.15);
    return tempC;
  };

  if (favorites.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "40px", color: "#aaa" }}>
        Brak ulubionych miast!
      </p>
    );
  }

  return (
    <main style={{ padding: "32px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "32px" }}>
        Ulubione miasta
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        {favorites.map((cityId) => {
          const city = weatherData[cityId];
          if (!city) return null;

          return (
            <Link
              key={cityId}
              to={`/city/${cityId}`}  
              style={{ textDecoration: "none" }} 
            >

              <div
                style={{
                  background: "#1f2c3e",
                  borderRadius: "20px",
                  padding: "24px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  cursor: "pointer",
                }}
                
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "48px", color: "#38bdf8" }}
                >
                  {city.icon}
                </span>

                <h2 style={{ margin: "12px 0", color: "#e0e0e0" }}>
                  {city.name}
                </h2>

                <p style={{ fontSize: "22px", color: "#38bdf8", fontWeight: "600" }}>
                  {convertTemp(city.current.temp)}°{unit}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
