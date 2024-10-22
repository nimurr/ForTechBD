const Services = () => {
  return (
    <div className="lg:w-[90%] w-[95%] mx-auto lg:my-20 my-10">
      <h2 className="text-center text-3xl font-bold lg:mt-20 mt-10 mb-10">
        OUR SERVICES
      </h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-5 bg-gray-100 flex-wrap">
        {/* Custom Software Card */}
        <div className=" w-full my-5 p-6 border hover:scale-105 duration-300 border-gray-300 rounded-lg bg-white text-center shadow-lg">
          <img
            src="https://res.cloudinary.com/nerob/image/upload/v1729535256/ForTech/lc1fau2nezhnrkaexrl2.jpg"
            alt="Custom Software"
            className="mx-auto mb-4 rounded"
          />
          <h2 className="text-2xl font-semibold mb-4">
            Custom Software Development
          </h2>
          <p className="text-gray-700 mb-6">
            Our Custom Software Development service creates suitable Software
            solutions to meet your unique business needs.
          </p>
        </div>

        {/* Ready-Made Software Card */}
        <div className=" w-full my-5 p-6 border hover:scale-105 duration-300 border-gray-300 rounded-lg bg-white text-center shadow-lg">
          <img
            src="https://res.cloudinary.com/nerob/image/upload/v1729535255/ForTech/tx9b5kbyaew3inxe4mtm.png"
            alt="Ready-Made Software"
            className="mx-auto mb-4 rounded"
          />
          <h2 className="text-2xl font-semibold mb-4">
            Ready-Made Software Solutions
          </h2>
          <p className="text-gray-700 mb-6">
            Ready-made software solutions are pre-built applications designed to
            meet specific business needs efficiently and cost-effectively. 
          </p>
        </div>

        {/* Support & Maintenance Card */}
        <div className=" w-full my-5 p-6 border hover:scale-105 duration-300 border-gray-300 rounded-lg bg-white text-center shadow-lg">
          <img
            src="https://res.cloudinary.com/nerob/image/upload/v1729535256/ForTech/di8zgk1nyg8w7n1qxxk4.png"
            alt="Support & Maintenance"
            className="mx-auto mb-4 rounded"
          />
          <h2 className="text-2xl font-semibold mb-4">Support & Marketing</h2>
          <p className="text-gray-700 mb-6">
            Support and marketing are essential components of business success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
