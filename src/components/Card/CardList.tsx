import { Models } from "appwrite";
import Card from "./Card";

function CardList({ products }: { products: Models.Document[] }) {
  return (
    <div className="my-8 grid gap-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {products?.map((item, idx) => (
        <Card key={`item-${idx}`} product={item} />
      ))}
    </div>
  );
}

export default CardList;
