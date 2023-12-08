// Importing necessary components and libraries
import { carousalItems } from "@/constant";
import Carousal from "../Carousal/Carousal";
import Container from "../Container/Container";
import CardList from "../Card/CardList";
import { useGetRandomProducts } from "@/react-query/queryAndMutation";
import MainContentSkeleton from "./MainContentSkeleton";

// MainContent component
function MainContent() {
  // Using react-query to get random products
  const { data: randomProducts, isPending: isFetchingProducts } =
    useGetRandomProducts();

  if (isFetchingProducts) return <MainContentSkeleton />;
  // Component return
  return (
    <main>
      <div className="mt-[61px]">
        <Container>
          {/* Carousel for displaying items */}
          <div className="max-w-7xl">
            <Carousal>
              {carousalItems?.map((item) => (
                <img key={item.id} src={item.image} alt={item.image} />
              ))}
            </Carousal>
          </div>
          {/* Quote or tagline */}
          <div className="flex flex-col gap-3 mt-4">
            <h2 className="text-center font-semibold text-xl">
              Your Journey to Footwear Elegance
            </h2>
            <p className="text-center">
              Elevate your every step with the perfect pair, because great shoes
              take you to great places.
            </p>
          </div>

          {/* Cards of products */}
          {randomProducts && <CardList products={randomProducts} />}
        </Container>
      </div>
    </main>
  );
}

// Exporting the MainContent component
export default MainContent;
