import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function ViewSelections() {
  const [selections, setSelections] = useState([]);

  useEffect(() => {
    loadSelections();
  }, []);

  const loadSelections = async () => {
    const mother = JSON.parse(
      localStorage.getItem("currentUser")
    );

    const { data, error } = await supabase
      .from("selections")
      .select("*")
      .eq("family_id", mother.family_id)
      .order("id", { ascending: false });

    if (!error) {
      setSelections(data);
    }
  };

  return (
    <div className="dashboard">
      <h1>📋 View Selections</h1>

      {selections.length === 0 && (
        <p>No selections yet.</p>
      )}

      {selections.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <h3>
            Child Name: {item.child_name}
          </h3>

          <p>
            Breakfast: {item.breakfast}
          </p>

          <p>
            Lunch: {item.lunch}
          </p>

          <p>
            Snacks: {item.snacks}
          </p>

          <p>
            Dinner: {item.dinner}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ViewSelections;