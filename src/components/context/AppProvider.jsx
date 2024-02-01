// AppProvider.js
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [query, setQuery] = useState("");
  const [originalProducts, setOriginalProducts] = useState([]);
  const [allproducts, setAllproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(url);
        setOriginalProducts(data);
        setAllproducts(data);
      } catch (error) {
        toast.error("Error");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        let apiUrl = url;

        if (query) {
          apiUrl += `?title=${query}`;
        }

        const { data } = await axios.get(apiUrl);
        setAllproducts(data);
      } catch (error) {
        toast.error("Error");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url, query]);

  return (
    <AppContext.Provider
      value={{ isLoading, allproducts, setAllproducts, query, setQuery, originalProducts }}
    >
      {children}
    </AppContext.Provider>
  );
}
