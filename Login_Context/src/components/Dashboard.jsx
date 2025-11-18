import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { token, logout } = useContext(AuthContext);

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      <p>Your Token: {token}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
