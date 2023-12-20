import CartItems from "./CartItems";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { TCartItem } from "@/types";
import { loadStripe } from "@stripe/stripe-js";
import { useUserContext } from "@/context/AuthContext";
import Loader from "../Loader";

function CartProducts() {
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);
  const { user, setUser } = useUserContext();
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  function convertPriceIntoNumber(price: string) {
    return Math.trunc(Number(price.replace(/ /g, "")));
  }

  async function checkout() {
    setIsPaymentLoading(true);
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

    if (!stripe) {
      console.log("Stripe failed to load. Please try again.");
      setIsPaymentLoading(false);
      return;
    }

    const body = {
      products: cartItems,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      `https://payment-backend-tzko.onrender.com/api/create-checkout-session`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
    setUser({ ...user, cart: [] });
    setIsPaymentLoading(false);
  }

  useEffect(() => {
    let initialTotal = 0;
    const cartArray: TCartItem[] = [];
    user.cart.forEach((product) => {
      const item: TCartItem = {
        $id: product.$id,
        name: product.name,
        price: convertPriceIntoNumber(product.price),
        thumbnail: product.thumbnail,
        quantity: 1,
      };
      cartArray.push(item);
      initialTotal += convertPriceIntoNumber(product.price);
    });
    setCartItems(cartArray);
    setTotal(initialTotal);
  }, [user.cart]);

  return (
    <div className="h-[610px] flex justify-between">
      <div className="overflow-auto flex flex-col gap-5 w-2/3">
        {user.cart?.map((item) => (
          <CartItems
            key={item.$id}
            product={item}
            setTotal={setTotal}
            setCartItems={setCartItems}
          />
        ))}
      </div>

      <div className="border rounded-lg h-fit p-3 w-[30%] bg-[#F8F8F8]">
        <h2>Order Summary</h2>
        <div className="mt-2 flex items-center justify-between">
          <span>Subtotal ({user.cart?.length} items) : </span>
          <span>₹ {total}</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span>Delivery : </span>
          <span>Free</span>
        </div>
        <div className="mt-6 border-t py-2">
          <div>
            <h3 className="flex items-center justify-between">
              Total : <span>₹ {total}</span>
            </h3>
          </div>
          <div className="flex items-center justify-center">
            <Button
              onClick={checkout}
              className="bg-black text-white rounded-2xl"
            >
              {isPaymentLoading && <Loader />}
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
