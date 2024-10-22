import { Link } from "react-router-dom";
// Import Framer Motion
import { motion } from "framer-motion";
import { useEffect } from "react";

// CSS Styles for Keyframes (optional, if you want to use CSS animations)
const styles = `
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1s ease-in-out forwards; /* Animation duration and timing */
}
`;

export default function HeroSection() {
  // Framer Motion animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeInOut" },
  };

  // Inject CSS styles into the document (if using CSS animation)
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet); // Clean up
    };
  }, []);

  return (
    <div className="bg-[url('https://themetechmount.com/html/altech-advanced/images/slider-main-01.png')] md:min-h-[90vh] min-h-[60vh] py-10 flex justify-center items-center relative overflow-hidden z-0">
      <div>
        {/* Using Framer Motion for Fade-In Animation */}
        <motion.h2
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center md:text-3xl text-xl font-semibold text-blue-50"
        >
          Smart Software For Smart Business
        </motion.h2>
        
        <motion.h2
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={{ delay: 0.2 }} // Delay for staggered effect
          className="headingFont leading-[1.2] md:my-10 my-5 text-white xl:text-[7rem] md:text-[4rem] text-[2.5rem] font-bold w-[90%] mx-auto text-center"
        >
          Software Solutions For Your Business.
        </motion.h2>
        
        <div className="flex justify-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ delay: 0.4 }} // Delay for staggered effect
          >
            <Link
              to={"/products"}
              className="min-w-48 mt-5 py-3 px-8 cursor-pointer bg-primary text-white font-semibold text-center max-w-48"
            >
              Get Start
            </Link>
          </motion.div>
        </div>
      </div>
      
      <img
        className="absolute right-0 opacity-40 -z-[1]"
        src="https://themetechmount.com/html/altech-advanced/images/bgimg01.png"
        alt=""
      />
    </div>
  );
}
