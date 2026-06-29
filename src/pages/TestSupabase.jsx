import { supabase } from "../services/supabase";
function TestSupabase() {

  const addFamily = async () => {

    const { data, error } =
      await supabase
        .from("families")
        .insert([
          {
            family_name: "Test Family"
          }
        ]);

    console.log(data);
    console.log(error);

    alert("Family Added");
  };

  return (
    <div>
      <h1>Supabase Test</h1>

      <button onClick={addFamily}>
        Add Family
      </button>
    </div>
  );
}

export default TestSupabase;