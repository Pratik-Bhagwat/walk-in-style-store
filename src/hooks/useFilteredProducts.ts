import { TFilteredProducts } from "@/types";
import { Models } from "appwrite";
import { useState, useEffect } from "react";

export function useFilteredProducts({
  products,
  selectedFilter,
}: TFilteredProducts) {
  const [filteredProducts, setFilteredProducts] = useState<Models.Document[]>(
    []
  );

  useEffect(() => {
    setFilteredProducts(
      products?.documents.filter((product) =>
        Object.entries(selectedFilter).every(
          ([key, value]) => product[key] === value
        )
      )
    );
  }, [products, selectedFilter]);

  return filteredProducts;
}
