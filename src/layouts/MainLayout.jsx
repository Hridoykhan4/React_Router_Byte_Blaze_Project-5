import React from "react";
import Navbar from "../components/Navbar";

import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/footer";
import Loader from "../components/Loader";



const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <div className="">
        <header className="h-16">
          <Navbar></Navbar>
        </header>

        <main className="min-h-[50vh]">
          <section>
            {
              navigation.state === 'loading' ? <Loader></Loader> : <Outlet></Outlet>
            }
          </section>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
