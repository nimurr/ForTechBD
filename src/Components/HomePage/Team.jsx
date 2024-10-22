const Team = () => {
  const teamMembers = [
    {
      name: "Nimur Rahman Nerob",
      role: " Founder & CEO",
      bio: "Visionary leader with 2+ years in software development.",
      image:
        "https://res.cloudinary.com/nerob/image/upload/v1729591498/ForTech/xy2mr25oeneq5quu9k0f.jpg",
    },
    {
      name: "Mujahidul Islam",
      role: "Web Developer & CTO",
      bio: "Expert in Front-end development and Web Design architecture.",
      image:
        "https://res.cloudinary.com/nerob/image/upload/v1729571347/ForTech/ta8xdywcj2cwtfbel83k.jpg",
    },
    {
      name: "Sakib Hossain",
      role: "UI/UX Designer & CMO",
      bio: "Specialist in creating intuitive and engaging user interfaces.",
      image:
        "https://res.cloudinary.com/nerob/image/upload/v1729571344/ForTech/lbhhww9vyfvush7srtjn.jpg",
    },
    {
      name: "Md Masipul Islam Siam",
      role: "Senior Advisor",
      bio: "Expert in employee management, organizational behavior, enhancing team performance, workplace culture",
      image:
        "https://res.cloudinary.com/nerob/image/upload/v1729594817/ForTech/ejt0bggxrhzqf0c2uwr8.jpg",
    },
    {
      name: "AS Sabbir",
      role: "Backend Developer",
      bio: "Skilled in developing dynamic web applications using the MERN Stack .",
      image:
        "https://res.cloudinary.com/nerob/image/upload/v1729585451/ForTech/cqkeh1zpaqpxb7nee5lm.png",
    },
    {
      name: "Dipok Roy",
      role: "Web Developer",
      bio: "Skilled in developing dynamic web applications using the MERN Stack .",
      image:
        "https://res.cloudinary.com/nerob/image/upload/v1729589052/ForTech/nlbfboumntb7sgs15pp9.jpg",
    },
    {
      name: "Dipu Debnath",
      role: "Full Stack Developer",
      bio: "Skilled in developing dynamic web applications using the MERN Stack .",
      image:
        "https://res.cloudinary.com/nerob/image/upload/v1729589052/ForTech/uzch77bnwrf4dyy3n1yj.jpg",
    },
    // {
    //   name: "Emily Davis",
    //   role: "UI/UX Designer & CMO",
    //   bio: "Specialist in creating intuitive and engaging user interfaces.",
    //   image:
    //     "https://res.cloudinary.com/nerob/image/upload/v1729571344/ForTech/lbhhww9vyfvush7srtjn.jpg",
    // },
  ];

  return (
    <div className="lg:w-[90%] w-[95%] mx-auto my-10">
      <h2 className="text-center text-3xl font-bold mb-10">
        OUR TEAM
      </h2>
      <div>
        <div 
          className=" sm:w-80 mx-auto my-10  border  overflow-hidden hover:scale-105 duration-300 border-gray-300 rounded-lg bg-white text-center shadow-lg"
        >
          <img
            src={teamMembers[0].image}
            alt={teamMembers[0].name}
            className="w-full mb-5 overflow-hidden"
          />
          <div className="p-3">
            <h2 className="text-2xl font-semibold mb-2">{teamMembers[0].name}</h2>
            <h3 className="text-blue-500 font-semibold">
              {teamMembers[0].role}
            </h3>
            <p className="text-gray-700 text-xs">
            {/* {teamMembers[0].bio} */}
            ForTechBD
            </p>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:gap-6 justify-center gap-5 bg-gray-100 flex-wrap ">
        {teamMembers.slice(1, 8).map((member, index) => (
          <div
            key={index}
            className="w-full  border  overflow-hidden hover:scale-105 duration-300 border-gray-300 rounded-lg bg-white text-center shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full mb-5 max-h-[300px]"
            />
            <div className="px-5 pt-2">
              <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
              <h3 className="text-blue-500 text-lg mb-4 font-semibold">
                {member.role}
              </h3>
              <p className="text-gray-700 mb-6">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
