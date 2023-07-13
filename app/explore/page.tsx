import Link from 'next/link';
import {
  exploreData,
  exploreData2,
  exploreData3,
} from '../components/constants/explore-img';
import Image from 'next/image';

const Explore = () => {
  return (
    <section className="max-w-7xl mx-auto h-screen">
      <div className="flex flex-col">
        <div className="flex flex-1">
          <div className="w-full pt-[135px]">
            {/* left div */}
            <div className="max-w-lg">
              <p className="text-[48px] leading-[58px] mb-[28px]">
                Select the rooms that make you swoon.
              </p>
              <p className="mb-[45px] text-[17px]">
                Decisions are hard. Pick as many as you want.
              </p>
              <div>
                <p className="text-base">Already a member?</p>
                <button className="border-none outline-none m-0 font-bold hover:underline">
                  Log in
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-screen overflow-y-auto pt-[83px]">
            {/* right div */}
            <div className="flex gap-4 pr-4">
              <div className="flex flex-col gap-4">
                {exploreData.map((item, index) => (
                  <div key={index} className="hover:shadow-lg">
                    <Image
                      src={item.img}
                      alt="explore"
                      className="h-auto w-[280px] rounded-sm"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {exploreData2.map((item, index) => (
                  <div key={index}>
                    <Image
                      src={item.img}
                      alt="explore"
                      className="h-auto w-[280px] rounded-sm"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {exploreData3.map((item, index) => (
                  <div key={index}>
                    <Image
                      src={item.img}
                      alt="explore"
                      className="h-auto w-[280px] rounded-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="z-40 min-h-[100px] w-full fixed bottom-0 left-0 py-[12px]  bg-[hsla(0,0%,100%,.8)]">
          {/* bottom div fixed */}
          <div className="max-w-7xl mx-auto flex flex-row-reverse items-center justify-start gap-8 h-[100px] w-full">
            <div>
              <button
                type="button"
                className="uppercase py-3 px-6 bg-nude4 text-[#f7f8f9] rounded-[50px] text-base font-semibold hover:bg-nude2 hover:text-nude5 md:text-sm md:px-16 md:py-4"
              >
                NEXT
              </button>
            </div>
            <div>
              <Link href="#">I don&#8217;t like these. Skip.</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
