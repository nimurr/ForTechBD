import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import {
  FaWhatsapp,
} from "react-icons/fa"; 

// className="lg:w-[90%] w-[95%] mx-auto"

function App() {
  const { loading } = useContext(AuthContext);

 
  if (loading) {
    return ( 
      <div className="w-48 mx-auto my-[300px]">
        <img
          className="w-full animate-ping"
          src="https://res.cloudinary.com/nerob/image/upload/v1729531814/ForTech/pbp1dpzatebplslzatpr.png"
          alt=""
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
 


      {/* Header section */}
      <header className="z-10">
        <Header />
      </header>

      {/* Main content: Outlet goes here */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer section */}
      <footer>
        <Footer />
      </footer>

      {/* WhatsApp link */}
      <Link
        target="_blank"
        to={`https://api.whatsapp.com/send/?phone=%2B8801740189038&text&type=phone_number&app_absent=0`}
        className="fixed md:bottom-10 bottom-20 right-5 flex h-12 w-12 cursor-pointer z-[9999]"
      >
        <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-primary opacity-75"></span>
        <span className="relative rounded-full h-12 w-12 bg-primary flex justify-center items-center">
          <FaWhatsapp className="text-3xl text-white" />
        </span>
      </Link>
    </div>
  );
}

export default App;
