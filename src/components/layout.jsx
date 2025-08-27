import React from "react";
import Navbar from "./ui/navbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default Layout;
