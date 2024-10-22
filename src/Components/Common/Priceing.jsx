import { Link } from "react-router-dom";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Ready Website",
      status: "Ready",
      img: "https://res.cloudinary.com/nerob/image/upload/v1729574816/ForTech/texcuvxnlvppoypfrmhk.png",
      price: "9999 TK",
      features: [
        "Pre-designed Templates",
        "Fast Setup",
        "Mobile Responsive",
        "SEO-Friendly",
        "Cost-Effective",
        "Hosting Included",
      ],
    },
    {
      name: "Custom Website",
      status: "Popular",
      img: "https://res.cloudinary.com/nerob/image/upload/v1729574817/ForTech/qthqsaeb4pkc8aroixat.png",
      price: "14999 TK",
      features: [
        "Effective Design",
        "SEO Optimized",
        "Responsive Layout",
        "Ongoing Support",
        "Custom Functionality",
        "Unique Branding",
      ],
      big : 'sdf',
    },

    {
      name: "Custom Website",
      pro: "Pro",
      img: "https://res.cloudinary.com/nerob/image/upload/v1729578778/ForTech/b1ivej5oy8iolqzb2ekz.png",
      price: "24999 TK",
      features: [
        "Effective Design",
        "SEO Optimized",
        "Responsive Layout",
        "Ongoing Support",
        "Custom Functionality",
        "Unique Branding",
      ],
    },
  ];

  return (
    <div className="">
      <h2 className="text-center text-3xl font-bold lg:mt-20 mt-10 mb-20">
        PRICING PLANS
      </h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 bg-gray-100 flex-wrap">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`w-full relative p-6 pb-10 border border-gray-300 rounded-lg bg-white text-center shadow-lg sm:hover:scale-110 duration-300 ${plan?.big && 'sm:scale-110'}`}
          >
            <img
              className="w-[60%] h-[25vh] mx-auto my-5 rounded-lg"
              src={plan.img}
              alt=""
            />

            <h2 className="text-2xl font-semibold mb-4">{plan.name} <span className="text-sm text-primary">{plan?.pro && plan.pro}</span></h2>

            {plan?.status && (
              <h2 className={`text-sm font-semibold mb-4 absolute -top-3 left-0 right-0 mx-auto w-20  ${!plan?.big && 'bg-purple-900'} text-white py-1 px-2 rounded ${plan?.big && 'bg-red-500'}`}>
                {plan?.status && plan.status}
              </h2>
            )}

            {plan?.pro && (
              <h2 className="text-sm font-semibold mb-4 absolute -top-3 left-0 right-0  mx-auto w-10 flex justify-center items-center  bg-purple-900 text-white py-1 px-8 rounded">
                {plan?.pro && plan.pro}
              </h2>
            )}
            <p className="text-4xl font-bold mb-6">
              {plan.price}{" "}
              <span className=" text-sm font-semibold text-primary">
                /Starting Price
              </span>
            </p>
            <ul className="mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700 mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to={"/contact"}
              className="text-white bg-blue-500 font-medium hover:bg-blue-600 py-2 px-4 rounded"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
