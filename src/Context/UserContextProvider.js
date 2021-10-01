import React, { createContext, useState } from 'react';

export const ctx = createContext();

function UserContextProvider({ children }) {
  const [search, setSearch] = useState("");

  return (
    <ctx.Provider value={{ search, setSearch }}>
      {children}
    </ctx.Provider>
  )

}

export default UserContextProvider;