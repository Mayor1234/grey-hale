import Header from '../header/Header';

const Hero = () => {
  return (
    <div className="relative h-[500px] md:h-screen w-screen hero-bg bg-no-repeat bg-cover bg-center">
      <Header />
      <div className=" absolute top-1/4 w-full flex flex-col justify-center items-center z-20">
        <h2 className="max-w-md text-[50px] mb-[18px] leading-[60px] text-center md:leading-[98px] text-nude2 md:max-w-[750px] md:text-[80px]">
          Breathe life into spaces
        </h2>
        <h1 className="max-w-sm text-center leading-[24px] text-[18px] md:text-[24px] font-semibold tracking-wide text-[#fff] pb-8 md:max-w-[750px]">
          Stunning interior design services, now within reach.
        </h1>
        <button
          type="button"
          className="uppercase py-3 px-6 bg-nude1 text-nude5 rounded-[50px] text-base font-medium hover:bg-nude3 hover:text-[#f7f8f9] md:text-sm md:px-8 md:py-4"
        >
          explore your style
        </button>
      </div>
    </div>
  );
};

export default Hero;
