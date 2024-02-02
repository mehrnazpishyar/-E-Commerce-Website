import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export const AppContext = createContext();

const apiUrl = "https://fakestoreapi.com/products";

export default function AppProvider({ children }) {
  const [query, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

 


  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const url = query ? `${apiUrl}?title=${query}` : apiUrl;
        const { data } = await axios.get(url);
        setAllProducts(data);
      } catch (error) {
        setAllProducts([])
        toast.error("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [query]);

  // search syntax

  return (
    <AppContext.Provider
      value={{
        isLoading,
        allProducts,
        setAllProducts,
        query,
        setQuery,
      
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
