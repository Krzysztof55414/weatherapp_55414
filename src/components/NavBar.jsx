import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../store";

export default function NavBar() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.favorites.searchTerm);

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 24px",
      borderBottom: "1px solid #283339"
    }}>
      <div style={{ display: "flex", gap: "24px" }}>
        <Link to="/" style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#e0e0e0" }}>
          <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>home</span>
          <small>Home</small>
        </Link>

        <Link to="/favorites" style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#e0e0e0" }}>
          <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>star</span>
          <small>Ulubione</small>
        </Link>
      </div>

      <input
        placeholder="Szukaj miasta..."
        value={search}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        style={{
          padding: "8px 12px",
          borderRadius: "12px",
          border: "none",
          backgroundColor: "#1a2831",
          color: "#e0e0e0",
          fontSize: "14px",
          width: "200px",
        }}
      />
    </nav>
  );
}
