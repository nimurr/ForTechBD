import { Link } from "react-router-dom";

const Clients = () => {
  const clientLogos = [
    {
      name: "Company 1",
      image: "https://res.cloudinary.com/nerob/image/upload/v1729503300/xs6muzuckpelhkaqw4lr.png",
      link: "https://mosby.com", // Add link for each client
    },
    {
      name: "Company 2",
      image: "https://res.cloudinary.com/nerob/image/upload/v1729503300/xs6muzuckpelhkaqw4lr.png",
      link: "https://mosby.com",
    },
    {
      name: "Company 3",
      image: "https://res.cloudinary.com/nerob/image/upload/v1729503300/xs6muzuckpelhkaqw4lr.png",
      link: "https://mosby.com",
    },
    {
      name: "Company 4",
      image: "https://res.cloudinary.com/nerob/image/upload/v1729503300/xs6muzuckpelhkaqw4lr.png",
      link: "https://mosby.com",
    },
    {
      name: "Company 5",
      image: "https://res.cloudinary.com/nerob/image/upload/v1729503300/xs6muzuckpelhkaqw4lr.png",
      link: "https://mosby.com",
    },
  ];

  return (
    <div className="lg:w-[90%] w-[95%] mx-auto lg:my-20 my-10">
      <h2 className="text-center text-3xl font-bold lg:mt-20 mt-10 mb-10">OUR CLIENTS</h2>
      <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 bg-gray-100 flex-wrap">
        {clientLogos.map((client, index) => (
          <div key={index} className="w-full p-6 text-center">
            <Link to={client.link} target="_blank" rel="noopener noreferrer">
              <img
                src={client.image}
                alt={client.name}
                className="mx-auto h-24 object-contain"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
