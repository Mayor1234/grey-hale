'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import zen1 from '/public/images/zen1.jpg';

import { Tilt } from 'react-tilt';
import { AnimatePresence, motion } from 'framer-motion';
import { textVariant, fadeIn } from '../constants/motion';
import { Fade } from '@mui/material';

const data = [
  { img: '/images/decor1.jpg' },
  { img: '/images/decor2.jpg' },
  { img: '/images/decor3.jpg' },
  // { img: '/images/decor4.jpg' },
  { img: '/assets/african/afridecor/afriadec1.jpeg' },
];

const items = [
  {
    title: 'african',
    url: 'african',
    img: '/assets/african/afridecor/afdecor61.jpeg',
    sub: [
      {
        img: '/assets/african/afridecor/afdecor1.jpeg',
        price: 63000,
        name: 'Nupe culture',
      },
      {
        img: '/assets/african/afridecor/afdecor22.png',
        price: 94000,
        name: 'sudan brit',
      },
      {
        img: '/assets/african/afridecor/afdecor3.jpeg',
        price: 58000,
        name: 'safari africa',
      },
      {
        img: '/assets/african/afridecor/afdecor5.jpg',
        price: 78000,
        name: 'fulani pride',
      },
    ],
  },
  {
    title: 'modern',
    url: 'modern',
    img: '/assets/modern/modecor/modecor44.jpeg',
    sub: [
      {
        img: '/assets/modern/modecor/modecor11.jpeg',
        price: 63000,
        name: 'sudan brit',
      },
      {
        img: '/assets/modern/modecor/modecor22.jpeg',
        price: 94000,
        name: 'sudan brit',
      },
      {
        img: '/assets/modern/modecor/modecor33.png',
        price: 58000,
        name: 'sudan brit',
      },
      {
        img: '/assets/modern/modecor/modecor55.jpeg',
        price: 78000,
        name: 'sudan brit',
      },
    ],
  },
  {
    title: 'minimalist',
    url: 'minimalist',
    img: '/assets/minimalist/mindecor/mindecor5.jpeg',
    sub: [
      {
        img: '/assets/minimalist/mindecor/mindecor2.jpeg',
        price: 63000,
        name: 'sudan brit',
      },
      {
        img: '/assets/minimalist/mindecor/mindecor1.jpeg',
        price: 94000,
        name: 'sudan brit',
      },
      {
        img: '/assets/minimalist/mindecor/mindecor3.jpeg',
        price: 58000,
        name: 'sudan brit',
      },
      {
        img: '/assets/minimalist/mindecor/mindecor4.jpeg',
        price: 78000,
        name: 'sudan brit',
      },
    ],
  },
];

interface Props {
  delay?: number;
  direction?: string;
  duration?: number;
  type?: string;
}

const defaultOptions = {
  max: 45, // max tilt rotation (degrees)
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 450, // Speed of the enter/exit transition
};

const props = {
  direction: 'up',
  type: 'spring',
  delay: 0.5,
  duration: 0.75,
};
{
  /* <motion.div variants={fadeIn('up', 'spring', 0.4, 0.1)}></motion.div>; */
}

function Threesubsection() {
  const [selected, setSelected] = useState(items[2]);
  // const [active, setAtive] = useState(0);

  console.log(selected);
  return (
    <section className="max-w-7xl mx-auto py-20">
      <div className="flex justify-center mb-6 px-5 text-center">
        <h3 className="text-[34px] leading-[45px] md:max-w-3xl md:text-[56px] md:leading-[62px]">
          Meet our unique looks – suitable for every space and style.
        </h3>
      </div>
      <section className="mt-[50px] px-5 md:px-0">
        <div className="flex text-sm overflow-scroll whitespace-nowrap gap-4 mb-5 text-nude5 md:gap-8 md:text-base cursor-pointer">
          {items.map((item, index) => (
            <div key={index}>
              <ul>
                <li
                  className={`${
                    item === selected ? 'text-primary' : ''
                  } uppercase hover:text-nude1`}
                  onClick={() => setSelected(item)}
                >
                  {item.title}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selected ? selected.url : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selected && (
                <div className="flex flex-col md:flex-row md:flex-1 gap-8 w-full md:h-[650px] overflow-hidden">
                  <div className="relative w-full h-[400px] md:h-full">
                    <Image
                      src={selected.img}
                      alt="meet the space"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>
                  <div className="grid grid-cols-2  items-center gap-4 md:gap-8 w-full h-full md:h-20">
                    {selected?.sub.map((item, index) => (
                      <div key={index} className="shadow-sm">
                        <Tilt
                          options={defaultOptions}
                          className="xs:w-[200px] w-full"
                        >
                          <div className="relative h-[200px] md:h-[280px] w-full">
                            <Image
                              src={item.img}
                              alt="decor1"
                              fill
                              className="object-cover object-center rounded-md"
                            />
                          </div>
                        </Tilt>
                        <div className="flex justify-between items-center text-gray-600">
                          <p className="capitalize pt-2">{item?.name}</p>
                          <p className="pt-1">&#8358;{item?.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </section>
  );
}

export default Threesubsection;
