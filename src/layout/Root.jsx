import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;