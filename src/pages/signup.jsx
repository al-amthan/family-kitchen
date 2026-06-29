import { useState } from "react";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [familyName, setFamilyName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {

    // Create Family
    const { data: familyData, error: familyError } =
      await supabase
        .from("families")
        .insert([
          {
            family_name: familyName,
          },
        ])
        .select();

    if (familyError) {
      alert("Family creation failed");
      return;
    }

    const familyId = familyData[0].id;

    // Create Mother User
    const { error: userError } =
      await supabase
        .from("users")
        .insert([
          {
            family_id: familyId,
            name: motherName,
            email,
            password,
            role: "mother",
          },
        ]);

    if (userError) {
      alert("User creation failed");
      return;
    }

    alert("Signup Successful");
    navigate("/");
  };

  return (
    <div className="login">
      <h1>Create Family Account</h1>

      <input
        placeholder="Family Name"
        value={familyName}
        onChange={(e) =>
          setFamilyName(e.target.value)
        }
      />

      <br /><br />

      <input
        placeholder="Mother Name"
        value={motherName}
        onChange={(e) =>
          setMotherName(e.target.value)
        }
      />

      <br /><br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button onClick={signup}>
        Create Account
      </button>
    </div>
  );
}

export default Signup;