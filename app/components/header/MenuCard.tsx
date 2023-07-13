'use client';

import Link from 'next/link';
import { useState } from 'react';
import Flyouts from './Flyouts';
import { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { Opacity } from '@mui/icons-material';

interface MenuProps {
  url: string;
  title: string;
  flyouts?: {
    url: string;
    title: string;
    img?: StaticImageData;
    imgr?: StaticImageData;
  }[];
}

interface NavBarProps {
  menuItem: MenuProps;
}

const showMenu = {
  show: {
    opacity: 1,
    y: 0,
    display: 'block',
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      type: 'spring',
      duration: 0.3,
      delay: 0,
      ease: 'easeOut',
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

const MenuCard: React.FC<NavBarProps> = ({ menuItem }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsActive((prev) => !prev);
  };
  const handleMouseLeave = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <motion.li variants={showMenu}>
      {menuItem.flyouts ? (
        <>
          <p
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${isActive && 'text-primary'}`}
          >
            {menuItem.title}
          </p>
          <motion.div
            variants={showMenu}
            initial="exit"
            animate={isActive ? 'show' : 'exit'}
            className={`${
              isActive ? 'block' : 'hidden'
            } absolute z-30 left-0 right-0 top-12 uppercase w-full bg-slate-50`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto py-8">
              <ul className="max-w-7xl mx-auto flex justify-evenly border-t-[1px] border-nude1 py-8">
                {menuItem.flyouts?.map((flyout, index) => (
                  <Flyouts flyout={flyout} key={index} />
                ))}
              </ul>
            </div>
          </motion.div>
        </>
      ) : (
        <Link href={`# ${menuItem.url}`} className="hover:text-primary">
          {menuItem.title}
        </Link>
      )}
    </motion.li>
  );
};

export default MenuCard;
