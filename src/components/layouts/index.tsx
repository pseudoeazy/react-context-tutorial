import React from "react";
import Footer from "components/layouts/footer";
import Header from "components/layouts/header";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ title, children }) => (
  <div className="container">
    <Header title={title} />
    <main className="main-content">{children}</main>
    <Footer />
  </div>
);

export default Layout;
