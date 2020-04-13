import React, { useState, useMemo } from "react";
import "./App.css";
import { storeProducts, detailProduct } from "./data";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/containers/Navbar";
import ProductList from "./components/containers/ProductList";
import Details from "./components/containers/Details";
import Default from "./components/containers/Default";
import Cart from "./components/containers/Cart";
import { ProductContext } from "./components/hooks/Context";
import ModalProduct from "./components/containers/ModalProduct";

export default function App(props) {
  // React Hooks
  const [products, setProducts] = useState(storeProducts);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const handleCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    console.log(product);
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price * product.count;
    const inxCart = cart.findIndex((item) => item.id == id);
    if (inxCart >= 0) {
      const prod = cart[inxCart];
      cart[inxCart] = {
        ...prod,
        count: prod.count + 1,
      };
      setCart(cart);
      addTotal();
    } else {
      cart.push(product);
      setCart(cart);
      addTotal();
    }
  };

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
    console.log("Acess Modal!");
    return { modalProduct, modalOpen };
  };

  const closeModal = () => {
    console.log("Close Modal");
    return setModalOpen(false);
  };

  const increment = (id) => {
    console.log("Increment ", id);
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.price * product.count;
    setCart(tempCart);
    addTotal();
  };

  const decrement = (id) => {
    console.log("Decrement ", id);
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.price * product.count;
      setCart(tempCart);
      addTotal();
    }
  };

  const removeItem = (id) => {
    console.log("Remove Item ", id);
    let tempProducts = [...products];
    let tempCart = [...cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removeItem = tempProducts[index];
    console.log(removeItem);
    removeItem.inCart = false;
    removeItem.count = 0;
    removeItem.total = 0;

    setCart(tempCart);
    setProducts(tempProducts);
  };

  const clearCart = () => {
    console.log("Clear Cart");
    setCart([]);
    addTotal();
    setProducts(storeProducts);
  };

  const addTotal = () => {
    let subtotal = 0;
    cart.map((item) => (subtotal += item.total));
    const tempTax = subtotal * 0.1;
    const tax = parseInt(tempTax.toFixed(2));
    const total = subtotal + tax;
    setCartSubtotal(subtotal);
    setCartTax(tax);
    setCartTotal(total);
  };

  const providerValue = useMemo(
    () => ({
      products,
      setProducts,
      getItem,
      cart,
      setCart,
      modalOpen,
      setModalOpen,
      modalProduct,
      setModalProduct,
      cartSubtotal,
      setCartSubtotal,
      cartTax,
      setCartTax,
      cartTotal,
      setCartTotal,
      handleCart,
      openModal,
      closeModal,
      increment,
      decrement,
      removeItem,
      clearCart,
    }),
    [
      products,
      setProducts,
      getItem,
      cart,
      setCart,
      modalOpen,
      setModalOpen,
      modalProduct,
      setModalProduct,
      cartSubtotal,
      setCartSubtotal,
      cartTax,
      setCartTax,
      cartTotal,
      setCartTotal,
      handleCart,
      openModal,
      closeModal,
      increment,
      decrement,
      removeItem,
      clearCart,
    ]
  );

  console.log(modalOpen);

  return (
    <React.Fragment>
      <Navbar />
      <div className="container-fluid">
        <ProductContext.Provider value={providerValue}>
          {props.children}
          <Switch>
            <Route
              exact
              path="/"
              // render={props => <ProductList {...props} products={products} />}
              component={ProductList}
            />
            <Route path="/details/:productId" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
          <ModalProduct />
        </ProductContext.Provider>
      </div>
    </React.Fragment>
  );
}
