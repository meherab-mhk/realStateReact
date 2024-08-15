import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  AOS.init();
  return (
    <div data-aos="fade-up">
      <div className="carousel w-full rounded-2xl h-[400px] md:h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/Kj0SdsK/real1.jpg" className="w-full" />
          <div className="bg-[#00000069] absolute w-full h-full"></div>
          <div className="absolute w-full h-full flex flex-col justify-center items-center text-center">
            <h1 className="animate__animated animate__bounce text-2xl md:text-3xl lg:text-[40px] font-bold text-white">
              Well,real estate is always <br />
              good, as far as i am concerned.
            </h1>
            <p className="text-white my-3">
              Drifting organic matter for the animals to eat When their filters
              get clogged, the <br />
              larvaceans abandon ship and construct a new house .
            </p>
            <button className="btn btn-warning">Load More</button>
          </div>
          <div className="absolute flex gap-3 justify-center bottom-4 md:justify-between transform md:-translate-y-[40%] left-5 right-5 md:top-[60%]">
            <a href="#slide4" className="btn btn-circle btn-warning">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-warning">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/hWQNFR5/real2.jpg" className="w-full" />
          <div className="bg-[#00000069] absolute w-full h-full"></div>
          <div className="absolute w-full h-full flex flex-col justify-center items-center text-center">
            <h1 className="animate__animated animate__bounce text-2xl md:text-3xl lg:text-[40px] font-bold text-white">
              Well,real estate is always <br />
              good, as far as i am concerned.
            </h1>
            <p className="text-white my-3">
              Drifting organic matter for the animals to eat When their filters
              get clogged, the <br />
              larvaceans abandon ship and construct a new house .
            </p>
            <button className="btn btn-warning">Load More</button>
          </div>
          <div className="absolute flex gap-3 justify-center bottom-4 md:justify-between transform md:-translate-y-[40%] left-5 right-5 md:top-[60%]">
            <a href="#slide1" className="btn btn-circle btn-warning">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-warning">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/Y8HBD4t/real3.jpg" className="w-full" />
          <div className="bg-[#00000069] absolute w-full h-full"></div>
          <div className="absolute w-full h-full flex flex-col justify-center items-center text-center">
            <h1 className="animate__animated animate__bounce text-2xl md:text-3xl lg:text-[40px] font-bold text-white">
              Well,real estate is always <br />
              good, as far as i am concerned.
            </h1>
            <p className="text-white my-3">
              Drifting organic matter for the animals to eat When their filters
              get clogged, the <br />
              larvaceans abandon ship and construct a new house .
            </p>
            <button className="btn btn-warning">Load More</button>
          </div>
          <div className="absolute flex gap-3 justify-center bottom-4 md:justify-between transform md:-translate-y-[40%] left-5 right-5 md:top-[60%]">
            <a href="#slide2" className="btn btn-circle btn-warning">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle btn-warning">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
