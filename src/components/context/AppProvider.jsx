import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export const AppContext = createContext();

const apiUrl = "https://fakestoreapi.com/products";

export default function AppProvider({ children }) {
  const [query, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const url = query ? `${apiUrl}?title=${query}` : apiUrl;
        const { data } = await axios.get(url);
        setAllProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setAllProducts([]);
        setFilteredProducts([]);
        toast.error("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        allProducts,
        setAllProducts,
        query,
        setQuery,
        filteredProducts,
        setFilteredProducts,
        selectedCategory,
        setSelectedCategory
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
