import { useState } from "react";
import Nav from "@/components/elements/nav";
import Footer from "../elements/footer";

const Layout = ({ global, children }) => {
  return (
    <div style={{ maxWidth: "1200px", margin: "auto" }}>
      <Nav menus={global} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
