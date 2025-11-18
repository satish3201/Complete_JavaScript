import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const AppWrapper = () => {
  const { token } = useContext(AuthContext);

  return <>{token ? <Dashboard /> : <Login />}</>;
};

const App = () => {
  return (
    <AuthProvider>
      <AppWrapper />
    </AuthProvider>
  );
};

export default App;
