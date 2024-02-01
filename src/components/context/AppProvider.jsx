import { createContext, useState } from "react";
import useProduct from "../hooks/useProduct";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [query, setQuery] = useState("");
  const { isLoading, allproducts } = useProduct(
    "https://fakestoreapi.com/products",
    query
  );

  return (
    <AppContext.Provider value={{ isLoading, allproducts,query,setQuery }}>
      {children}
    </AppContext.Provider>
  );
}
