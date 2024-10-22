import { Drawer, Navbar } from "flowbite-react";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import HeaderTop from "./HeaderTop";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // State for sticky navbar
  const [isOpen, setIsOpen] = useState(false);

  const clickMenu = () => {
    setMenu(!menu);
  };

  const handleClose = () => setIsOpen(!isOpen);

  // Effect to handle scroll event for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 0); // Set sticky to true if scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <HeaderTop />
      <div
        className={`w-full md:border-none border-primary border-b-2 ${
          isSticky
            ? "fixed top-0 shadow-lg bg-white dark:bg-white"
            : "bg-white dark:bg-white z-10"
        }`}
      >
        <Navbar
          fluid
          rounded
          className="lg:w-[92%] w-[95%] mx-auto dark:bg-white"
        >
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://res.cloudinary.com/nerob/image/upload/v1729531814/ForTech/pbp1dpzatebplslzatpr.png"
              className="mr-3 h-10"
              alt="Logo"
            />
          </Navbar.Brand>

          {!menu ? (
            <div className="">
              <IoMenu
                onClick={() => setIsOpen(true)}
                className="md:hidden text-3xl"
              />
              <Drawer
                className="md:hidden dark:bg-white dark:text-black"
                open={isOpen}
                onClose={handleClose}
                position="left"
              >
                <Drawer.Header />
                <Drawer.Items>
                  <div className="flex flex-col gap-5 my-10">
                    <Link to={"/products"}>Product</Link>
                    <Link to={"/services"}>Services</Link>
                    <Link to={"/team"}>Team</Link>
                    <Link to={"/blog"}>Blog</Link>
                    <Link to={"/career"}>Career</Link>
                    <Link to={"/contact"}>Contact</Link>
                    <Link
                      to={`tel:01740189038`}
                      className="xl:flex hidden gap-1 items-center cursor-pointer"
                    >
                      <MdCall className="text-primary text-3xl rotate-[35deg]" />
                      <div>
                        <h2>Call Us Now:</h2>
                        <h3>+88 01740189038</h3>
                      </div>
                    </Link>
                  </div>
                </Drawer.Items>
              </Drawer>
            </div>
          ) : (
            <RxCross1 className="md:hidden text-2xl" onClick={clickMenu} />
          )}

          <Navbar.Collapse className={`${menu ? "block" : "hidden"}`}>
            <div className="sm:flex flex-wrap items-center xl:gap-8 gap-5 sm:mt-0 mt-5">
              <Link to={"/products"}>Product</Link>
              <Link to={"/services"}>Services</Link>
              <Link to={"/team"}>Team</Link>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/career"}>Career</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link
                to={`tel:01740189038`}
                className="xl:flex hidden gap-1 items-center cursor-pointer"
              >
                <MdCall className="text-primary text-3xl rotate-[35deg]" />
                <div>
                  <h2>Call Us Now:</h2>
                  <h3>+88 01740189038</h3>
                </div>
              </Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
