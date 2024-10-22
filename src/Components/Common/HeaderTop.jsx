import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function HeaderTop() {
  return (
    <div className=" border-b">
      <div className="flex sm:justify-between justify-center lg:w-[90%] w-[95%] mx-auto py-2">
        <div className="sm:block hidden">
          <Link to={"/"} className="font-semibold text-primary">
            support@fortechbd.com
          </Link>
        </div>
        <div>
          <ul className="flex sm:justify-between justify-center gap-5 items-center font-bold ">
            {/* <Link className="flex items-center gap-1" to={"/"}>
              <FaLocationDot className="sm:text-lg text-primary" /> Order Tracking{" "}
            </Link> */}
            <Link className="flex items-center gap-1" to={"/about-us"}>
              <FaFacebook className="sm:text-xl text-sm text-primary" />
            </Link>
            <Link className="flex items-center gap-1" to={`https://api.whatsapp.com/send/?phone=%2B8801740189038&text&type=phone_number&app_absent=0`}>
              <IoLogoWhatsapp className="sm:text-xl text-sm text-primary" />
            </Link>
            <Link className="flex items-center gap-1" to={"/contact-us"}>
              <FaInstagramSquare className="sm:text-xl text-sm text-primary" />{" "}
            </Link>
            <Link className="flex items-center gap-1" to={"/contact-us"}>
              <FaLinkedin className="sm:text-xl text-sm text-primary" />{" "}
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
