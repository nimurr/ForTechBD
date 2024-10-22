
export default function Blogs() {
  return (
    <div className="lg:w-[90%] w-[95%] mx-auto lg:my-20 my-10 ">
      <h2 className="text-3xl font-semibold mb-10">Our Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(8)].map((_ , idx) => (
          <div className="bg-white rounded-lg shadow-md p-4" key={idx} > 
            <img src="https://res.cloudinary.com/nerob/image/upload/v1727960472/Protfolio/Projects/qsy9f5j6qkh4soor48fp.png" alt="" />
            <br />
            <span className="xs">{++idx + 5}-jun-2024</span>
            <h2 className=" font-semibold text-xl">Top Programming Languages to Learn in 2024</h2>
            <p>Discover the thriving software development landscape in Bangladesh. Explore various career paths, explore top companies, and gain insights into the skills and certifications that can propel your career forward. Learn about the opportunities available for both experienced professionals and aspiring developers in Bangladesh dynamic tech industry.</p>
          </div>
        ))}
      </div>

    </div>
  )
}
