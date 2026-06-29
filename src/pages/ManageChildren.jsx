import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function ManageChildren() {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    loadChildren();
  }, []);

  const loadChildren = async () => {
    const mother = JSON.parse(
      localStorage.getItem("currentUser")
    );

    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("family_id", mother.family_id)
      .eq("role", "child");

    setChildren(data || []);
  };

  const deleteChild = async (id) => {
    const confirmed = window.confirm(
      "Delete this child?"
    );

    if (!confirmed) return;

    await supabase
      .from("users")
      .delete()
      .eq("id", id);

    loadChildren();
  };

  return (
    <div className="dashboard">
      <h1>Manage Children</h1>

      {children.map((child) => (
        <div
          key={child.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{child.name}</h3>

          <p>{child.email}</p>

          <button
            onClick={() =>
              deleteChild(child.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ManageChildren;