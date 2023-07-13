'use client';

import Image from 'next/image';
import mini3 from '../../../public/images/mini3.jpg';
import indus1 from '../../../public/images/indus1.jpg';
import Section from '../constants/Section';

const Doubleimage = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <Section>
        <div className="flex flex-col md:flex-row gap-10 w-full px-5">
          <div className="flex-1">
            <div className="flex justify-center items-center">
              <div className="text-center md:text-start md:p-10">
                <h3 className="text-3xl tracking-[.4px] leading-8 pb-4 text-nude5 md:max-w-[500px]">
                  Embrace your style.
                </h3>
                <p className="text-base">
                  Have big dreams for your space? Share your inspiration, goals,
                  and budget and we’ll help you design a space you love.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[2] flex-shrink">
            <div className="flex flex-1 gap-4 md:gap-8">
              <div className="relative w-full h-[350px] md:h-[500px]">
                <Image
                  src={mini3}
                  alt="show style"
                  fill
                  className="object-cover object-center rounded-md"
                />
              </div>

              <div className="relative w-full h-[350px] md:h-[500px]">
                <Image
                  src={indus1}
                  alt="show style"
                  fill
                  className="object-cover object-center rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
};

export default Doubleimage;
