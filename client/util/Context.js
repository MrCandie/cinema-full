import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { moviesList } from "../data/data";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  setCartItem: (item) => {},
  login: () => {},
  logout: () => {},
  isLoggedIn: false,
  token: "",
  role: "user",
  userId: "",
  user: "",
});

export default function CartProvider({ children }) {
  const [cartProduct, setCartProduct] = useState([]);
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState("");

  const router = useRouter();

  function login(token, role, id, user) {
    setToken(token);
    setRole(role);
    setUserId(id);
    setUser(user);
    router.replace("/movies");
  }

  function logout() {
    setToken(null);
    router.replace("/account/login");
  }

  const isLoggedIn = !!token;

  function getProductQuantity(id) {
    const quantity = cartProduct.find((item) => item.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);
    const cartItem = moviesList.find((item) => item.id === id);
    if (quantity === 0) {
      setCartProduct([
        ...cartProduct,
        {
          id: id,
          quantity: 1,
          name: cartItem.name,
          price: cartItem.price,
          image: cartItem.image,
        },
      ]);
    } else {
      setCartProduct(
        cartProduct.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
                name: cartItem.name,
                price: cartItem.price,
                image: cartItem.image,
              }
            : item
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProduct(
        cartProduct.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProduct((cartProduct) =>
      cartProduct.filter((item) => item.id !== id)
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProduct.map((cartItem) => {
      const movieData = moviesList.find((item) => item.id === cartItem.id);
      totalCost += movieData.price * cartItem.quantity;
    });

    return totalCost;
  }

  const value = {
    items: cartProduct,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    login,
    logout,
    token,
    isLoggedIn,
    role,
    userId: userId,
    user,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
