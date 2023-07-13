import Image from 'next/image';
import midcent1 from '../../../public/images/midcent1.jpg';

const Showspace = () => {
  return (
    <section className="max-w-7xl mx-auto my-20">
      <div className="flex flex-col md:flex-row-reverse gap-10 w-full px-5">
        <div className="flex-1">
          <div className="flex justify-center items-center">
            <div className="md:p-10 text-center md:text-start">
              <h3 className="text-3xl tracking-[.4px] leading-8 pb-4 text-nude5 md:max-w-[500px]">
                Visualize your space.
              </h3>
              <p className="text-base max-w-lg md:max-w-none">
                Have big dreams for your space? Share your inspiration, goals,
                and budget and we’ll help you design a space you love.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-[2] flex-shrink">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src={midcent1}
              alt="show space"
              fill
              className="object-cover object-center rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showspace;
