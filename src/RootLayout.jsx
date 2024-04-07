import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default RootLayout;
