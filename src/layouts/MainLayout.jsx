import React from "react";
import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <header className="min-h-16">
          <Navbar></Navbar>
        </header>

        <main className="grow ">
          <section>
            <Outlet></Outlet>
          </section>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
