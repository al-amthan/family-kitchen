import { useNavigate } from "react-router-dom";

function MotherDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>👩 Mother Dashboard</h1>

      <div className="dashboard-grid">

        <div
          className="card"
          onClick={() => navigate("/add-child")}
        >
          <h2>➕ Add Child</h2>
         
        </div>

        <div
          className="card"
          onClick={() => navigate("/create-menu")}
        >
          <h2>🍽️ Create Menu</h2>
         
        </div>

        <div
          className="card"
          onClick={() => navigate("/view-selections")}
        >
          <h2>📋 View Selections</h2>
    
        </div>

        <div
          className="card"
          onClick={() => navigate("/manage-children")}
        >
          <h2>🗑️ Manage Children</h2>
  
        </div>

      </div>

      <button
        className="logout-btn"
        onClick={() => navigate("/")}
      >
        Logout
      </button>
    </div>
  );
}

export default MotherDashboard;