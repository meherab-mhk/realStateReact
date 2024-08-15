import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Root = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className="bg-[#313155]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
