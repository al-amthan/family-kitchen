import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .eq("password", password)
      .single();

    if (error || !data) {
      alert("Invalid Login");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify(data)
    );

    if (data.role === "mother") {
      navigate("/mother");
    } else {
      navigate("/child");
    }
  };

  return (
    <div className="login">
      <h1>Family Kitchen</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>
        Login
      </button>

      <br /><br />

      <button onClick={() => navigate("/signup")}>
        Sign Up
      </button>
    </div>
  );
}

export default Login;