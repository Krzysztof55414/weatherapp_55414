import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import weatherData from "../data/weatherData";

export default function CityPage() {
  const { id } = useParams();
  const unit = useSelector((state) => state.temperature.unit);
  const data = weatherData[id];

  if (!data) return <p style={{ textAlign: "center", marginTop: "50px" }}>Brak danych</p>;

  const convertTemp = (tempC) => {
    if (unit === "F") return Math.round(tempC * 9 / 5 + 32);
    if (unit === "K") return Math.round(tempC + 273.15);
    return tempC;
  };

  
  return (
    <main style={{ padding: "32px", maxWidth: "1000px", margin: "0 auto" }}>

      <h1 style={{ textAlign: "center", fontSize: "36px", marginBottom: "24px" }}>{data.name}</h1> 

      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <span className="material-symbols-outlined" style={{ fontSize: "64px", color: "#38bdf8" }}>
          {data.icon}
        </span>
        <div style={{ fontSize: "52px", fontWeight: "700", color: "#38bdf8", margin: "12px 0" }}>
          {convertTemp(data.current.temp)}°{unit}
        </div>
        <p style={{ fontSize: "18px", color: "#aaa" }}>{data.current.desc}</p>
      </div>

      {/* Prognoza 5 dni */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "16px",
          justifyItems: "center",
          marginBottom: "40px",
        }}
      >
        {data.forecast.map((day) => (
          <div
            key={day.day}
            style={{
              background: "#1f2c3e",
              padding: "16px",
              borderRadius: "20px",
              width: "100%",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
            }}
          >
            <p style={{ fontWeight: "600", marginBottom: "8px", color: "#e0e0e0" }}>{day.day}</p>
            <span className="material-symbols-outlined" style={{ fontSize: "36px", color: "#38bdf8" }}>
              {day.icon}
            </span>
            <div style={{ marginTop: "8px", color: "#e0e0e0", fontWeight: "600" }}>
              {convertTemp(day.max)}° / {convertTemp(day.min)}°
            </div>
          </div>
        ))}
      </div>




      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "24px",
        }}
      >
  
        <div
          style={{
            background: "#1f2c3e",
            borderRadius: "20px",
            padding: "24px",
            textAlign: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "36px", color: "#38bdf8", marginBottom: "12px" }}>
            water_drop
          </span>
          <p style={{ fontWeight: "600", fontSize: "18px", color: "#e0e0e0" }}>{data.rain}</p>
          <p style={{ fontSize: "14px", color: "#aaa", marginTop: "4px" }}>Opady</p>
        </div>


        <div
          style={{
            background: "#1f2c3e",
            borderRadius: "20px",
            padding: "24px",
            textAlign: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "36px", color: "#38bdf8", marginBottom: "12px" }}>
            air
          </span>
          <p style={{ fontWeight: "600", fontSize: "18px", color: "#e0e0e0" }}>{data.wind}</p>
          <p style={{ fontSize: "14px", color: "#aaa", marginTop: "4px" }}>Wiatr</p>
        </div>


        <div
          style={{
            background: "#1f2c3e",
            borderRadius: "20px",
            padding: "24px",
            textAlign: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "36px", color: "#38bdf8", marginBottom: "12px" }}>
            cloud
          </span>
          <p style={{ fontWeight: "600", fontSize: "18px", color: "#e0e0e0" }}>{data.clouds}</p>
          <p style={{ fontSize: "14px", color: "#aaa", marginTop: "4px" }}>Zachmurzenie</p>
        </div>
      </div>
    </main>
  );
}
