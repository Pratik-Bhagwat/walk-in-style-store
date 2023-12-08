import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Container from "../Container/Container";
import ProductInfoDialog from "./ProductInfoDialog";
import CardCarousal from "../Carousal/CardCarousal";
import Card from "../Card/Card";
import {
  useGetProductById,
  useGetRandomProducts,
} from "@/react-query/queryAndMutation";
import { useParams } from "react-router-dom";
import { useUserContext } from "@/context/AuthContext";
import { toast } from "sonner";
import ProductPageSkeleton from "./ProductPageSkeleton";

function ProductPage() {
  const { productId } = useParams();
  const { data: product } = useGetProductById(productId);
  const [currentImg, setCurrentImg] = useState(product?.thumbnail);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const { isAuthenticated, setUser, setCart } = useUserContext();
  const { data: randomProducts } = useGetRandomProducts();

  useEffect(() => {
    if (product && product.thumbnail) {
      setCurrentImg(product.thumbnail);
    }
  }, [product]);

  if (!product) return <ProductPageSkeleton />;

  function showImg(img: string) {
    setCurrentImg(img);
  }

  function handleSelectSize(size: number) {
    setSelectedSize(size);
  }

  function handleAddToCart() {
    if (!isAuthenticated) {
      toast.error("Please Login First!!");
    } else if (!selectedSize) {
      toast.error("Please Select a Size");
    } else if (isAuthenticated && product) {
      // Check if the selected size is in the product's available sizes
      if (product.sizes && !product.sizes.includes(selectedSize)) {
        toast.error("Invalid Size");
        return;
      }

      setCart((prevCart) => [...prevCart, { ...product, selectedSize }]);
      setUser((prevUser) => ({
        ...prevUser,
        cart: [...prevUser.cart, { ...product, selectedSize }],
      }));

      toast.success("Product Added to Cart Successfully 🎉");
    }
  }

  return (
    <div className="mt-28 w-screen">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* left part contains product images */}
          <div className="flex items-center gap-4">
            {/* images left part */}
            <div className="hidden lg:flex flex-col gap-3 self-start">
              {product?.images?.map((item: string, idx: number) => (
                <div
                  key={idx}
                  className="h-[60px] w-[60px]"
                  onMouseEnter={() => showImg(item)}
                >
                  <img
                    src={item}
                    alt="shoeImg"
                    className="rounded h-full w-full"
                  />
                </div>
              ))}
            </div>

            <div className="relative flex flex-col gap-4 self-start">
              {/* image right part */}
              <div className="lg:w-[470px] lg:h-[600px] xl:w-[535px] xl:h-[669px]">
                <img src={currentImg} alt="shoeImg" className="rounded-lg" />
              </div>

              {/* images left part for mobile screen is here */}
              <div className="flex gap-3 self-start lg:hidden">
                {product?.images?.map((item: string, idx: number) => (
                  <div
                    key={idx}
                    className="h-[60px] w-[60px]"
                    onMouseEnter={() => showImg(item)}
                  >
                    <img
                      src={item}
                      alt="shoeImg"
                      className="rounded h-full w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* right part contains product info */}
          <div className="flex flex-col gap-16 w-[90%]">
            <div>
              {/* product name and category */}
              <div className="lg:w-full xl:w-[75%]">
                <h2 className="font-semibold text-3xl">{product?.name}</h2>
                <h3 className="font-medium text-lg">
                  {product?.category?.join()} Shoes
                </h3>
              </div>

              {/* product mrp and taxes info */}
              <div>
                <p className="font-medium text-lg">MRP : ₹ {product?.price}</p>
                <p className="text-[#757575] text-lg">
                  incl. of taxes <br /> (Also includes all applicable duties)
                </p>
              </div>
            </div>
            {/* product sizes */}
            <div className="flex flex-col">
              <div className="lg:w-full xl:w-[75%]">
                <h4 className="text-lg font-medium">Select Size</h4>
                <div className="flex items-center flex-wrap gap-2 mt-2">
                  {Array.from({ length: 12 }, (_, index) => {
                    const size = index + 3; // Adjust the starting size as needed
                    const isAvailable = product?.sizes?.includes(size);
                    const isSelected = selectedSize === size;

                    return (
                      <div
                        key={index}
                        onClick={() => isAvailable && handleSelectSize(size)}
                        className={`border-2 rounded text-center w-[122px] h-[48px] py-2 text-lg font-medium ${
                          isSelected
                            ? "border-black hover:cursor-pointer"
                            : isAvailable
                            ? "opacity-100 hover:border-black hover:cursor-pointer"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                      >
                        UK {size}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* add to cart btn */}
              <div className="mt-4">
                <Button
                  onClick={handleAddToCart}
                  className="rounded-full w-full lg:w-full xl:w-[75%] py-8 bg-black hover:bg-black/60"
                >
                  Add to Cart
                </Button>
              </div>

              {/* product description or info */}
              <ProductInfoDialog product={product} />
            </div>
          </div>
        </div>

        {/* you may also like carousel section */}
        <CardCarousal heading="You Might Also Like">
          {randomProducts?.map((product, idx) => (
            <Card key={idx} product={product} />
          ))}
        </CardCarousal>
      </Container>
    </div>
  );
}

export default ProductPage;
