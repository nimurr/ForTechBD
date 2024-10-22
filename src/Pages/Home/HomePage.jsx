import About from "../../Components/HomePage/About";
import HeroSection from "../../Components/HomePage/HeroSection";
import Clients from "../../Components/HomePage/OurClient";
import Products from "../../Components/HomePage/Product";
import Services from "../../Components/HomePage/Services";
import Team from "../../Components/HomePage/Team";

export default function HomePage() {

  return (
    <div >
      <HeroSection />
      <About></About>
      <Services></Services>
      <Products></Products>
      <Team></Team>
      <Clients></Clients>
    </div>
  );
}
