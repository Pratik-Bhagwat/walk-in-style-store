import { Models } from "appwrite";
import { Link } from "react-router-dom";

function Card({ product }: { product: Models.Document }) {
  return (
    <Link to={`/${product?.name}/${product?.$id}`}>
      <div>
        {/* product image container */}
        <div className="w-full sm:w-[310px] sm:h-[310px] md:w-[375px] md:h-[375px] lg:w-[328px] lg:h-[328px] xl:w-[415px] xl:h-[415px]">
          <img
            src={product?.thumbnail}
            alt="jordan shoe"
            className="h-full w-full object-cover"
          />
        </div>

        {/* product info */}
        <div className="mt-3 px-2">
          <div className="mb-3">
            {/* product name */}
            <h4 className="font-semibold">{product?.name}</h4>

            {/* product category */}
            <p className="text-[#707072]">{product?.category.join()}</p>
          </div>

          {/* product price */}
          <p className="font-semibold text-lg">
            MRP : <span>₹ {product?.price}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
