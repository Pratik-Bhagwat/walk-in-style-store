// Importing necessary libraries and components
import { useState } from "react";
import {
  useGetAllProducts,
  useSearchProducts,
} from "@/react-query/queryAndMutation";
import useDebounce from "@/hooks/useDebounce";
import Container from "../Container/Container";
import CardList from "../Card/CardList";
import SearchResults from "./SearchResults";
import ShopPageSkeleton from "./ShopPageSkeleton";

// Main component
function ShopPage() {
  // Hooks for infinite scrolling and product fetching
  const { data: products, isPending: isPorductLoading } = useGetAllProducts();

  // State for search value and debouncing
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 500);

  // Hook for searching products
  const { data: searchedProducts, isFetching: isSearchFetching } =
    useSearchProducts(debouncedValue);

  // Conditions for showing search results or products
  const shouldShowSearchResults = searchValue !== "";
  const shouldShowProducts =
    !shouldShowSearchResults && products && products.documents.length === 0;

  // Loading state
  if (isPorductLoading) return <ShopPageSkeleton />;

  // Render
  return (
    <div className="mt-20">
      <Container>
        <div className="relative flex flex-col gap-4">
          {/* Search input */}
          <div className="flex items-center justify-center">
            <div className="border rounded-full w-full lg:w-[40%] py-3 px-5">
              <input
                type="search"
                placeholder="Search"
                className="focus:outline-none w-full"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>

          {/* Display search results or products */}
          <div>
            {shouldShowSearchResults ? (
              searchedProducts && (
                <SearchResults
                  isSearchFetching={isSearchFetching}
                  searchedProducts={searchedProducts.documents}
                />
              )
            ) : shouldShowProducts ? (
              <p>End Of Products</p>
            ) : (
              products?.documents && <CardList products={products.documents} />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

// Export component
export default ShopPage;
