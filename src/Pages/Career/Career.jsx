import { Link } from "react-router-dom";

export default function Career() {
  const positions = [
    {
      title: "Front-end Developer",
      description:
        "We are looking for a talented Front-end Developer to create beautiful and responsive web applications using modern JavaScript frameworks like React.",
      image: "https://res.cloudinary.com/nerob/image/upload/v1729569245/ForTech/etw3ffk9ws7tiyr3hwff.png", // Path to the Front-end Developer image
      vacancy: 3,
    },
    {
      title: "Graphic Designer",
      description:
        "Join our creative team as a Graphic Designer to design engaging visuals for both web and print. Must have experience in Adobe Creative Suite.",
      image: "https://res.cloudinary.com/nerob/image/upload/v1729569244/ForTech/c9uefrqmiiv7h07esqob.png", // Path to the Graphic Designer image
      vacancy: 1,
    },
    {
      title: "Marketing Specialist",
      description:
        "We are seeking a Marketing Specialist to drive our digital campaigns, SEO strategies, and social media presence. Experience with data-driven marketing is a plus.",
      image: "https://res.cloudinary.com/nerob/image/upload/v1729569245/ForTech/mhu7diha8qrrgypzfhgn.png", // Path to the Marketing Specialist image
      vacancy: 1,
    },
  ];

  return (
    <div className="lg:w-[90%] w-[95%] mx-auto">
      <div className="bg-gray-100 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Careers</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={position.image}
                alt={position.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{position?.title}</h2>
                <p className="text-gray-700 my-2 font-semibold">
                  Vacancy : {position?.vacancy}
                </p>
                <p className="text-gray-700 mb-4">{position?.description}</p>
                <Link
                  to={
                    "https://mail.google.com/mail/u/0/?fs=1&to=fortechbd24@gmail.com&tf=cm"
                  }
                  className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
                >
                  Send Resume
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
