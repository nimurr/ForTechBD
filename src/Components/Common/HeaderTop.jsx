import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function HeaderTop() {
  return (
    <div className=" border-b">
      <div className="flex sm:justify-between justify-center lg:w-[90%] w-[95%] mx-auto py-2">
        <div className="sm:block hidden">
          <Link to={"https://mail.google.com/mail/u/0/?fs=1&to=fortechbd24@gmail.com&tf=cm"} className="font-semibold text-primary">
            fortechbd24@gmail.com
          </Link>
        </div>
        <div>
          <ul className="flex sm:justify-between justify-center gap-5 items-center font-bold ">
            {/* <Link className="flex items-center gap-1" to={"/"}>
              <FaLocationDot className="sm:text-lg text-primary" /> Order Tracking{" "}
            </Link> */}
            <Link className="flex items-center gap-1" to={"https://www.facebook.com/profile.php?id=61564583527835"}>
              <FaFacebook className="sm:text-xl text-sm text-primary" />
            </Link>
            <Link className="flex items-center gap-1" to={`https://api.whatsapp.com/send/?phone=%2B8801740189038&text&type=phone_number&app_absent=0`}>
              <IoLogoWhatsapp className="sm:text-xl text-sm text-primary" />
            </Link> 
            <Link className="flex items-center gap-1" to={"https://www.linkedin.com/company/fortechbd"}>
              <FaLinkedin className="sm:text-xl text-sm text-primary" />{" "}
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
