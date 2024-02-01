// useProduct.js

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useProduct(url, query) {
  const [allproducts, setAllproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return { isLoading, allproducts };
}
