import { useState, useEffect } from "react"
import asiaimg from "./assets/img/asia.jpeg"
import americaimg from "./assets/img/america.jpeg"
import australiaimg from "./assets/img/australia.jpeg"

function App() {

  const [active, setActive] = useState("Destinations");

  const navItems = ["Destinations", "Wellness", "Innovation", "Nature", "Community", "The Story"];

  const slides = [
    {
      image: asiaimg,
      textcountry: "Aisa",
      textdetail: "Asia — a land of culture, spice, temples, and adventure, truly a traveler’s paradise",
      imgno: "01"
    },
    {
      image: americaimg,
      textcountry: "America",
      textdetail: "America — a land of dreams, diversity, wild roads, and endless adventures 🇺🇸",
      imgno: "02"
    },
    {
      image: australiaimg,
      textcountry: "Australia",
      textdetail: "Australia — a land of unique wildlife, stunning landscapes, and vibrant cities down under 🇦🇺",
      imgno: "03"
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const Hero = () => {
    return (
      <>
        <div className="h-full w-full grid place-content-center">
          <div className="h-[200px] w-[1450px] border-0 border-black flex items-center">
          <p className="text-white text-9xl">{slides[index].textcountry}</p>
        </div>
        <div className="h-[50px] w-[1450px] border-y-2 border-white flex justify-between items-center">
          <div>
            <p className="text-white"> <span>☰</span> Explore Destinations</p>
          </div>
          <div>
            <p className="text-white">{slides[index].textcountry}</p>
          </div>
          <div>
            <p className="text-white">{slides[index].imgno}/03</p>
          </div>
        </div>
        <div className="h-[300px] w-[1450px] border-0 border-black flex justify-between items-center">
          <div className="w-[300px]">
            <p className="text-white">{slides[index].textdetail}</p>
          </div>
          <div className="flex gap-3">
               {/* first img box */}
               <div className="w-[200px] h-[200px] rounded-lg">
                <p className="text-white">01</p>
                <img src={asiaimg} alt="image" className="w-[200px] h-[150px] rounded-lg"/>
               </div>

               {/* second img box */}
               <div className="w-[200px] h-[200px] rounded-lg">
                <p className="text-white">02</p>
                <img src={americaimg} alt="image" className="w-[200px] h-[150px] rounded-lg"/>
               </div>
               
               {/* third img box */}
               <div className="w-[200px] h-[200px] rounded-lg">
                <p className="text-white">03</p>
                <img src={australiaimg} alt="image" className="w-[200px] h-[150px] rounded-lg"/>
               </div>
          </div>
        </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* container */}
      <div className="h-screen w-full grid" style={{ backgroundImage: `url(${slides[index].image})`,transition : 'background-image 1s ease-in-out', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* section */}
        <div className="h-[102px] w-full flex justify-center items-center">
          <section className="w-[1450px] h-[90px] flex justify-between items-center border-0 border-red-50 px-4 md:px-[50px] sticky top-0">
            {/* title */}
            <p className="text-xl text-white sm:text-2xl font-normal uppercase tracking-[6px] sm:tracking-[12px]">
              elem☰ntis
            </p>

            {/* nav */}
            <nav className="flex gap-5">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setActive(item)}
                  className={`relative pb-1 transition-all duration-200 text-white
                    ${
                      active === item
                        ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white"
                        : "hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white"
                    }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* div for add button & icon */}
            <div className="flex items-center gap-3 sm:gap-5">
              {/* button — visible only on large screens */}
              <button className="text-white hidden lg:flex h-[50px] w-[120px] justify-center items-center border border-gray-300">
                Join Us 🡥
              </button>

              {/* hamburger / emoji icon — always visible */}
              <a href="#" className="text-white flex items-center text-2xl">
                ☰
              </a>
            </div>
          </section>
        </div>
        {/* hero */}
        <Hero />
      </div>
    </>
  );
}

export default App
