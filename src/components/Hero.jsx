import { Link } from "react-router-dom";
import heroImage from "../assets/img/woman_hero.png";

const Hero = () => {
  return <section className="w-full h-[800px] bg-hero bg-no-repeat bg-center bg-cover py-24">
    
    <div className="container xl:max-w-screen-xl h-full flex items-center justify-center xl:justify-around">
       {/* text */}
        <div className="flex flex-col">
            <div className="flex items-center">
               <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
               <span className="uppercase font-semibold">
                new trend
               </span>
            </div>
            <h1 className="uppercase text-[70px] font-light leading-[1.1] mb-4">
              Autumn sale stylish <br />
              <span className="font-semibold">womans</span>
            </h1>
            <Link to='/' className="self-start text-primary border-b-2 border-primary font-semibold uppercase">
               Discover More
            </Link>
        </div>
        {/* image */}
        <div className="hidden self-start lg:block">
            <img src={heroImage} alt="hero" className="" />
        </div>
    </div>

    </section>;
};

export default Hero;
