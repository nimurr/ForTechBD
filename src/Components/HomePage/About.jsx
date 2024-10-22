import { Link } from "react-router-dom";


export default function About() {
  return (
    <div className="lg:w-[90%] w-[95%] mx-auto my-10 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-primary text-xl font-semibold">About US</h3>
        <h2  className=" text-5xl my-5 font-semibold">The Best <span className="text-primary">IT & Software</span> Solution .</h2>
        <p>We are a dynamic software company dedicated to delivering innovative solutions that meet the unique needs of businesses. Our team of skilled developers and tech experts work closely with clients to create custom software that enhances efficiency, drives growth, and fosters success. With a passion for technology and a commitment to excellence, we help businesses harness the power of digital transformation to achieve their goals.</p>
        <Link to={'/contact'} className=" mt-5 flex  justify-center text-center py-2 px-8 bg-primary text-white font-semibold w-48">Contact Us</Link>
      </div>
      <div>
        <img className="w-full h-[80%]" src="https://res.cloudinary.com/nerob/image/upload/v1729538301/ForTech/mwmlhyt2ciyxc0bf9cie.webp" alt="" />
      </div>
    </div>
  )
}
