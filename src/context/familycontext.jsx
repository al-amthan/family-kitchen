import { createContext, useState } from "react";

export const FamilyContext = createContext();

export function FamilyProvider({ children }) {
  const [childrenList, setChildrenList] = useState([]);

  const [menu, setMenu] = useState({
    breakfast: [],
    lunch: [],
    snacks: [],
    dinner: [],
  });

  const [selections, setSelections] = useState([]);

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <FamilyContext.Provider
      value={{
        childrenList,
        setChildrenList,
        menu,
        setMenu,
        selections,
        setSelections,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </FamilyContext.Provider>
  );
}