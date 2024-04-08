import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterSection />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default RootLayout;
