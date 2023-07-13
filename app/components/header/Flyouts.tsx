import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

interface Subfly {
  url: string;
  title: string;
  img?: StaticImageData;
  imgr?: StaticImageData;
  subfly?: { url: string; title: string }[];
}

interface SubflyProps {
  flyout: Subfly;
}

// const zoomIn = (delay: number, duration: number) => {
//   return {
//     hidden: {
//       y: -50,
//       opacity: 0,
//     },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         delay: delay,
//         duration: duration,
//         ease: 'easeOut',
//       },
//     },
//   };
// };

const Flyouts: React.FC<SubflyProps> = ({ flyout }) => {
  return (
    <>
      <li>
        <div className="text-lg font-medium capitalize tracking-wide">
          {flyout?.imgr && (
            <div className="relative h-[250px] w-[300px]">
              <Link href={`${flyout?.url}`}>
                <Image
                  src={flyout.imgr}
                  alt="flyouts screen"
                  fill
                  className="object-cover object-center pb-4"
                />
              </Link>
            </div>
          )}
          <p className="text-xl font-medium pb-2 capitalize tracking-wide cursor-default">
            {flyout?.title}
          </p>
        </div>

        <ul className="capitalize text-nude5 flex flex-col gap-2 ">
          {flyout?.subfly?.map((item, index) => (
            <Link href={`${item?.url}`} key={index}>
              <li className="hover:text-primary">{item.title}</li>
            </Link>
          ))}
        </ul>
      </li>
      {/* {flyout?.img && (
        <div className="relative h-[250px] w-[300px]">
          <Image
            src={flyout?.img}
            alt="flyout image"
            className="object-cover object-center rounded-sm"
            fill
          />
        </div>
      )} */}
    </>
  );
};

export default Flyouts;
