import { useState, useEffect } from "react";
import { supabase } from "../services/supabase";

function ChildDashboard() {
  const [menu, setMenu] = useState(null);

  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [snacks, setSnacks] = useState("");
  const [dinner, setDinner] = useState("");

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    const user = JSON.parse(
      localStorage.getItem("currentUser")
    );

    const { data, error } = await supabase
      .from("menus")
      .select("*")
      .eq("family_id", user.family_id)
      .order("id", { ascending: false })
      .limit(1)
      .single();

    if (!error) {
      setMenu(data);
    }
  };

  const saveSelection = async () => {
    const user = JSON.parse(
      localStorage.getItem("currentUser")
    );

    const { error } = await supabase
      .from("selections")
      .insert([
        {
          family_id: user.family_id,
          child_id: user.id,
          child_name: user.name,
          breakfast,
          lunch,
          snacks,
          dinner,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Selection Saved");
  };
  const selectedStyle = (selected, item) => ({
    margin: "5px",
    padding: "12px 20px",
    borderRadius: "12px",
    border:
    selected === item
    ? "3px solid #2563eb"
    : "2px solid #ddd",
    background:
    selected === item
    ? "#dbeafe"
    : "white",
    color:
    selected === item
    ? "#1e40af"
    : "black",
    fontWeight:
    selected === item
    ? "bold"
    : "normal",
    boxShadow:
    selected === item
    ? "0 4px 12px rgba(37,99,235,0.3)"
    : "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
    });


  if (!menu) {
    return <h2>Loading Menu...</h2>;
  }

  return (
    <div className="child-dashboard">
      <h1>Child Dashboard</h1>

      <h2>Breakfast</h2>

      {menu.breakfast?.map((item, index) => (
        <button
          key={index}
          onClick={() => setBreakfast(item)}
          style={selectedStyle(breakfast, item)}
        >
          {item}
        </button>
      ))}

      <h2>Lunch</h2>

      {menu.lunch?.map((item, index) => (
        <button
          key={index}
          onClick={() => setLunch(item)}
          style={selectedStyle(lunch, item)}
        >
          {item}
        </button>
      ))}

      <h2>Snacks</h2>

      {menu.snacks?.map((item, index) => (
        <button
          key={index}
          onClick={() => setSnacks(item)}
          style={selectedStyle(snacks, item)}
        >
          {item}
        </button>
      ))}

      <h2>Dinner</h2>

      {menu.dinner?.map((item, index) => (
        <button
          key={index}
          onClick={() => setDinner(item)}
          style={selectedStyle(dinner, item)}
        >
          {item}
        </button>
      ))}

      <br /><br />

      <button onClick={saveSelection}>
        Save My Choices
      </button>
    </div>
  );
}

export default ChildDashboard;