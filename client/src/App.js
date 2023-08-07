import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "./utils/cartSlice";
import cartSaver from "./utils/cartSaver";
import { Footer, Header, MobileHeader } from "./components";
import styles from "./App.module.css";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartSaver),
});

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Provider store={store}>
      <div className={styles.pageContainer}>
        <div className={styles.header}>{isMobile ? <MobileHeader /> : <Header />}</div>
        <div className={styles.main}>
          <Outlet />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
