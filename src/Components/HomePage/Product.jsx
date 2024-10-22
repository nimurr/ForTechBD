import { Link } from "react-router-dom";
import Pricing from "../Common/Priceing";

const Products = () => {
  return (
    <div className="lg:w-[90%] w-[95%] mx-auto lg:my-20 my-10">
      <h2 className="text-center text-3xl font-bold lg:mt-20 mt-10 mb-10">
        OUR PRODUCTS
      </h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-5 bg-gray-100 flex-wrap">
        {/* Productivity Suite Pro Card */}
        <div className=" w-full my-5 p-6 border  hover:scale-105 duration-300 border-gray-300 rounded-lg bg-white text-center shadow-lg">
          <img
            src="https://res.cloudinary.com/nerob/image/upload/v1729536275/ForTech/sejjhzw7jjaenwhizvps.png"
            alt="Productivity Suite Pro"
            className="mx-auto mb-4 rounded"
          />
          <h2 className="text-2xl font-semibold ">Productivity Suite Pro</h2>
          <h2 className="text-xl font-semibold text-primary my-4">9999 TK</h2>
          <p className="text-gray-700 mb-6">
            A complete productivity package to boost collaboration, manage time
            efficiently, and automate workflows.
          </p>
          <Link
            to={"/contact"}
            className="text-white px-8 mr-1 py-2 rounded font-medium bg-green-600"
          >
            View
          </Link>
          <Link
            to={"/contact"}
            className="text-white px-8 py-2 rounded font-medium bg-primary"
          >
            Order Now
          </Link>
        </div>

        {/* RetailMaster POS Card */}
        <div className=" w-full my-5 p-6 border  hover:scale-105 duration-300 border-gray-300 rounded-lg bg-white text-center shadow-lg">
          <img
            src="https://res.cloudinary.com/nerob/image/upload/v1729536275/ForTech/sejjhzw7jjaenwhizvps.png"
            alt="RetailMaster POS"
            className="mx-auto mb-4 rounded"
          />
          <h2 className="text-2xl font-semibold ">RetailMaster POS</h2>
          <h2 className="text-xl font-semibold text-primary my-4">14999 TK</h2>
          <p className="text-gray-700 mb-6">
            A state-of-the-art Point-of-Sale system for retailers, designed to
            streamline sales and inventory management.
          </p>
          <Link
            to={"/contact"}
            className="text-white px-8 mr-1 py-2 rounded font-medium bg-green-600"
          >
            View
          </Link>
          <Link
            to={"/contact"}
            className="text-white px-8 py-2 rounded font-medium bg-primary"
          >
            Order Now
          </Link>
        </div>

        {/* CloudSafe Backup Solution Card */}
        <div className=" w-full my-5 p-6 border  hover:scale-105 duration-300 border-gray-300 rounded-lg bg-white text-center shadow-lg">
          <img
            src="https://res.cloudinary.com/nerob/image/upload/v1729536275/ForTech/sejjhzw7jjaenwhizvps.png"
            alt="CloudSafe Backup"
            className="mx-auto mb-4 rounded"
          />
          <h2 className="text-2xl font-semibold my-4">
            CloudSafe Backup Solution
          </h2>
          <h2 className="text-xl font-semibold text-primary my-4">9999 TK</h2>
          <p className="text-gray-700 mb-6">
            A secure cloud-based backup system to keep your critical data safe
            with automated and encrypted backups.
          </p>
          <Link
            to={"/contact"}
            className="text-white px-8 mr-1 py-2 rounded font-medium bg-green-600"
          >
            View
          </Link>
          <Link
            to={"/contact"}
            className="text-white px-8 py-2 rounded font-medium bg-primary"
          >
            Order Now
          </Link>
        </div>
      </div>
      <div>
        <Pricing></Pricing>
      </div>
    </div>
  );
};

export default Products;
