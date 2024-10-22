
import { FaPhone } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

export default function ContactUs() {
 
  



  const handleCustomerMessage = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const formData = { name, email, phone, message };
   console.log(formData)
  };

  return (
    <div className="lg:w-[90%] w-[95%] mx-auto">
       <ToastContainer />
      <div className="relative bg-cover bg-center bg-[url('https://static.vecteezy.com/system/resources/previews/017/165/756/non_2x/transparent-background-abstract-background-free-png.png')] sm:h-[150px] flex flex-col items-center justify-center h-[25vh]">
        <h1 className="text-white text-4xl font-bold">Contact Us</h1>  
        <h1 className="text-white text-xl font-semibold mt-3">For Order / Information</h1>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-5 my-10">
        <div className="p-5 border rounded-md bg-white">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaMapLocationDot /> Location
          </h2>
          <p className="mt-2">
            Office: House: Mirpur-11 , Dhaka , Bangladesh <br /> E-mail: fortechbd24@gmial.com <br /> Hot Line:
            +88 01740189038
          </p>
        </div>
        <div className="p-5 border rounded-md bg-white">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaPhone className="rotate-90" /> Phone
          </h2>
          <p className="mt-2"> Hot Line: +88 01740189038</p>
        </div>
        <div className="p-5 border rounded-md bg-white">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <MdEmail /> Email
          </h2>
          <p className="mt-2"> E-mail:  fortechbd24@gmial.com</p>
        </div>
      </div>
      <div className="mb-10">
        <form
          onSubmit={handleCustomerMessage}
          className="md:w-[60%] w-full mx-auto"
          action=""
        >
          <div className="flex justify-between gap-2 mb-2">
            <input
              className="w-full border-[#eee] border-2 rounded-sm"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              className="w-full border-[#eee] border-2 rounded-sm"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <input
            className="w-full mb-2 border-[#eee] border-2 rounded-sm"
            type="number"
            name="phone"
            placeholder="Your Phone"
          />
          <textarea
            className="w-full mb-2 border-[#eee] border-2 rounded-sm"
            name="message"
            placeholder="Your Message"
            id=""
          ></textarea>
          <input
            className="w-full cursor-pointer p-2 rounded-sm text-white bg-primary inline-block"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}
