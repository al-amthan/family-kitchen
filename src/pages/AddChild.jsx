import { useState } from "react";
import { supabase } from "../services/supabase";

function AddChild() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addChild = async () => {
    const mother = JSON.parse(
      localStorage.getItem("currentUser")
    );

    const { error } = await supabase
      .from("users")
      .insert([
        {
          family_id: mother.family_id,
          name,
          email,
          password,
          role: "child",
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Child Added Successfully");

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="page-container">
      <h1>Add Child</h1>

      <input
        type="text"
        placeholder="Child Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br /><br />

      <input
        type="email"
        placeholder="Child Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Child Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button onClick={addChild}>
        Add Child
      </button>
    </div>
  );
}

export default AddChild;