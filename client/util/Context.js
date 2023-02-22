import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { moviesList } from "../data/data";
import {
  addWatchlists,
  deleteCart,
  deleteWatchlists,
  getAllMovies,
  postCart,
  updateCart,
} from "./http";

async function fetchMovies() {
  const response = await getAllMovies();
  return response.data.data.movies;
}

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
  list: "",
  setCartItem: (item) => {},
  addWatchList: () => {},
  removeWatchlist: () => {},
  setWatchlist: () => {},
});

export default function CartProvider({ children }) {
  const [cartProduct, setCartProduct] = useState([]);
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState("");
  const [watchlist, setWatchlists] = useState([]);

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
    const quantity = cartProduct.find((el) => {
      const movId = el.movie.find((item) => item);
      return movId.id === id;
    });

    if (quantity === undefined) {
      return 0;
    }

    return quantity.quantity;
  }

  async function addOneToCart(id) {
    const movies = await fetchMovies();
    const quantity = getProductQuantity(id);
    const cartItem = movies.find((item) => item.id === id);
    if (quantity === 0) {
      try {
        const response = await postCart(userId, {
          id: id,
          quantity: 1,
          movie: id,
          user: userId,
        });
      } catch (err) {
        alert("unknown error occurred...Try again");
      }
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
      const cart = cartProduct.find((el) => {
        const movie = el.movie.find((item) => item)._id;

        return movie === id;
      });
      try {
        const response = await updateCart(cart.id, {
          id: id,
          quantity: quantity + 1,
        });
      } catch (err) {
        alert("unknown error occurred...Try again");
      }
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

  async function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      const cart = cartProduct.find((el) => {
        const movie = el.movie.find((item) => item)._id;

        return movie === id;
      });
      try {
        const response = await updateCart(cart.id, {
          id: id,
          quantity: quantity - 1,
        });
      } catch (err) {
        alert("unknown error occurred...Try again");
      }
      setCartProduct(
        cartProduct.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  async function deleteFromCart(id) {
    const cart = cartProduct.find((el) => {
      const movie = el.movie.find((item) => item)._id;

      return movie === id;
    });

    try {
      const response = await deleteCart(cart.id);
    } catch (err) {
      alert("unknown error occurred...Try again");
    }

    setCartProduct((cartProduct) =>
      cartProduct.filter((item) => item.id !== id)
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProduct.map(async (cartItem) => {
      const movieData = cartItem.movie?.find((el) => el);

      totalCost += movieData?.price * cartItem.quantity;
    });

    return totalCost;
  }

  function setCartItem(item) {
    setCartProduct(item);
  }

  function setWatchlist(item) {
    setWatchlists(item);
  }

  async function addWatchList(id) {
    const response = await addWatchlists({ movie: id, user: userId });
    setWatchlists((movId) => [...movId, { movie: id, user: userId }]);
  }

  async function removeWatchlist(id) {
    const response = await deleteWatchlists(id);

    setWatchlists((movId) => movId.filter((el) => el.id !== id));
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
    setCartItem,
    addWatchList,
    removeWatchlist,
    setWatchlist,
    list: watchlist,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
