import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageChildren from "./pages/ManageChildren";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MotherDashboard from "./pages/MotherDashboard";
import ChildDashboard from "./pages/ChildDashboard";
import AddChild from "./pages/AddChild";
import CreateMenu from "./pages/CreateMenu";
import ViewSelections from "./pages/ViewSelections";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/manage-children"element={<ManageChildren />}/>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/mother" element={<MotherDashboard />} />
        <Route path="/child" element={<ChildDashboard />} />

        <Route path="/add-child" element={<AddChild />} />
        <Route path="/create-menu" element={<CreateMenu />} />
        <Route
          path="/view-selections"
          element={<ViewSelections />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;