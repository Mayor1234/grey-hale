import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

const Introsec = () => {
  return (
    <section className="max-w-5xl mx-auto my-20">
      <div className="flex flex-col justify-center w-full text-gray-800">
        <p className="text-center tracking-[.8px] mb-[20px] md:mb-[25px]">
          THERE IS BEAUTY IN SPACE
        </p>
        <p className="text-3xl  leading-[45px] mb-[40px] text-center px-5 md:leading-[60px] md:mb-[56px] md:text-5xl">
          Bring your dream home to life with one-on-one design help &
          hand-picked products tailored to your style, space, and budget.
        </p>
        <button className="h-[56px] w-[56px] rounded-full bg-secondary hover:bg-tertiary mx-auto text-[#fff] flex justify-center items-center">
          <PlayIcon className="h-8" />
        </button>
        <p className="text-center pt-4 text-sm text-nude4">
          Check out what we do
        </p>
      </div>
    </section>
  );
};

export default Introsec;
