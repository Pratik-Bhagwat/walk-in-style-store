// Importing necessary components and libraries
import { Models } from "appwrite";
import Loader from "../Loader";
import CardList from "../Card/CardList";

// Type definition for the component props
type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedProducts: Models.Document[];
};

// SearchResults component
function SearchResults({
  isSearchFetching,
  searchedProducts,
}: SearchResultsProps) {
  // If search is in progress, show loader
  if (isSearchFetching) return <Loader />;

  // If search results are available, show them in a card list
  if (searchedProducts?.length > 0) {
    return <CardList products={searchedProducts} />;
  }

  // If no search results are found, show a message
  return <div className="">No results found</div>;
}

// Exporting the SearchResults component
export default SearchResults;
