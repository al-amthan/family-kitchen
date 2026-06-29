import { useState } from "react";
import { supabase } from "../services/supabase";

function CreateMenu() {
  const [menuDate, setMenuDate] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [snacks, setSnacks] = useState("");
  const [dinner, setDinner] = useState("");

  const saveMenu = async () => {
    const mother = JSON.parse(
      localStorage.getItem("currentUser")
    );

    const { error } = await supabase
      .from("menus")
      .insert([
        {
          family_id: mother.family_id,
          menu_date: menuDate,
          breakfast: breakfast.split(","),
          lunch: lunch.split(","),
          snacks: snacks.split(","),
          dinner: dinner.split(","),
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Menu Saved");
  };

  return (
    <div className="page-container">
      <h1>Create Menu</h1>

      <input
        type="date"
        value={menuDate}
        onChange={(e) =>
        setMenuDate(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Breakfast"
        value={breakfast}
        onChange={(e) => setBreakfast(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Lunch"
        value={lunch}
        onChange={(e) => setLunch(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Snacks"
        value={snacks}
        onChange={(e) => setSnacks(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Dinner"
        value={dinner}
        onChange={(e) => setDinner(e.target.value)}
      />

      <br /><br />

      <button onClick={saveMenu}>
        Save Menu
      </button>
    </div>
  );
}

export default CreateMenu;