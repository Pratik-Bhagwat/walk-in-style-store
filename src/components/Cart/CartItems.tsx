import { useUserContext } from "@/context/AuthContext";
import { TCartItem } from "@/types";
import { Models } from "appwrite";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";

type CartItemsProps = {
  product: Models.Document;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  setCartItems: React.Dispatch<React.SetStateAction<TCartItem[]>>;
};

function CartItems({ product, setTotal, setCartItems }: CartItemsProps) {
  const [quantityCount, setQuantquantityCount] = useState(1);
  const { setUser } = useUserContext();

  function convertPriceIntoNumber(price: string) {
    return Math.trunc(Number(price.replace(/ /g, "")));
  }

  function handleIncrement() {
    if (quantityCount >= 0) {
      setTotal(
        (prevTotal) => prevTotal + convertPriceIntoNumber(product.price)
      );
      setQuantquantityCount(quantityCount + 1);

      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.$id === product.$id
            ? { ...item, quantity: quantityCount + 1 }
            : item
        )
      );
    }
  }

  function handleDecrement() {
    if (quantityCount > 1) {
      setTotal(
        (prevTotal) => prevTotal - convertPriceIntoNumber(product.price)
      );
      setQuantquantityCount(quantityCount - 1);

      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.$id === product.$id
            ? { ...item, quantity: quantityCount - 1 }
            : item
        )
      );
    }
  }

  function removerFromCart(productId: string) {
    setUser((prevUser) => ({
      ...prevUser,
      cart: prevUser.cart.filter((product) => product.$id !== productId),
    }));
  }

  return (
    <div className="relative border rounded-md p-3 w-full">
      <button
        onClick={() => removerFromCart(product.$id)}
        className="absolute right-2 top-1.5 border rounded-full p-1 bg-black/10"
      >
        <X size={15} />
      </button>
      <div className="flex items-center justify-between">
        <img
          className="h-20 w-20"
          src={product.thumbnail}
          alt={`${product.name} iamge`}
        />
        <h2>{product.name}</h2>
        <div className="flex items-center gap-2">
          QNTY:
          <div className="flex items-center gap-2">
            <button
              className="border rounded-full bg-black/10"
              onClick={handleDecrement}
            >
              <Minus size={18} />
            </button>
            {quantityCount}
            <button
              className="border rounded-full bg-black/10"
              onClick={handleIncrement}
            >
              <Plus size={18} />
            </button>
          </div>
        </div>
        <span>₹ {convertPriceIntoNumber(product.price) * quantityCount}</span>
      </div>
    </div>
  );
}

export default CartItems;
