import React from "react";
import { Navigation } from "../components/navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export const MainLayout = () => {
  return (
    <>
      <main>
        <Header />
        <Navigation />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};
