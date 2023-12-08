import Container from "../Container/Container";
import cartImg from "../../assets/empty-cart.jpg";
import { useUserContext } from "@/context/AuthContext";
import CartProducts from "./CartProducts";

function Cart() {
  const { user } = useUserContext();

  return (
    <div className="mt-24 select-none">
      <Container>
        {user.cart.length === 0 && (
          <div className="flex flex-col items-center h-screen">
            <img src={cartImg} alt="empty-cart-img" className="w-96 h-96" />
            <h2 className="text-2xl font-medium text-gray-600 mt-4">
              Your Cart is Empty 🥺
            </h2>
            <p className="text-gray-500">
              Looks like you haven't made your choice yet...
            </p>
          </div>
        )}
        {user.cart.length > 0 && <CartProducts />}
      </Container>
    </div>
  );
}

export default Cart;
