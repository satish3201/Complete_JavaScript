import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [input, setInput] = useState("");

  const handleLogin = () => {
    // Sample token
    const fakeToken = "abc123token";
    login(fakeToken);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login Page</h2>

      <input
        type="text"
        placeholder="Enter something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
