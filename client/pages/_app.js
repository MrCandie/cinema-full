import "../styles/globals.css";
import CartProvider from "../util/Context";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
