import { useState } from "react";
import Header from "../components/Header/Header";
import BottomNavigationBar from "../components/Navigation/Navigaton";

export default function Layout({ children, cart }) {
  return (
    <>
      <Header />
      {children}
      <BottomNavigationBar cart={cart} />
    </>
  );
}
