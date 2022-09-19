import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
export default function Layout({ children, title }) {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>{title ? title + " - Amazona" : "Amazona"}</title>
        <meta name="description" content="Ecommance Website" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex justify-between h-12 shadow-md items-center px-4">
            <Link href="/">
              <a className="text-lg font-bold">amazona</a>
            </Link>
            <div className="space-x-4">
              <Link href="/cart">
                <a>
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 font-bold text-white px-2 py-1 text-xs">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="/login">Login</Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex items-center justify-center h-10 shadow-inner">
          Copyright @ 2022 Amazona
        </footer>
      </div>
    </>
  );
}
