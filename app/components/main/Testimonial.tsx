'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import slid1 from 'public/images/decor1.jpg';
import slid2 from '/public/images/decor2.jpg';
import slid3 from '/public/images/decor3.jpg';
import slid4 from '/public/images/decor4.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Section from '../constants/Section';

import { SkipNextOutlined, SkipPreviousOutlined } from '@mui/icons-material';

const data = [
  {
    name: 'Okoye Chidi',
    review:
      'Jane and her team are extremely talented and it is always a pleasure to work with them. We have purchased 3 pieces of furniture designed by Jane that not only look great, they are very comfortable to sit in. My favourite chair is the Bernie which sits proudly in my home theatre.',
  },
  {
    name: 'Femi Awoyele',
    review:
      "Jane and her team were great. They really took the time to understand my style and helped me express myself in my home. The team's attention to detail was phenomenal. They did an amazing job blending my old and new furniture and decor. I'd definitely recommend them.",
  },
  {
    name: 'Charles Oku',
    review:
      'We wanted to let you all know how impressed we are with you and the team. The level of professionalism, attention to detail, and client focus has been amazing. From the floor plan layouts to the selection of materials to helping with the contractors, everything has been top notch.',
  },
  {
    name: 'Blessing Thompson',
    review:
      "Thank you for all your help with our bathroom. It's beautiful and everyone is very happy. Hope you have a wonderful holiday season as well.",
  },
];

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="px-1 py-1 h-8 z-20  absolute -top-[40px] right-0 overflow-hidden cursor-pointer font-medium  hover:bg-slate-50 hover:shadow-lg hover:rounded-full"
      onClick={onClick}
    >
      <SkipNextOutlined fontSize="medium" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="px-1 py-1 h-8 -top-[40px] absolute z-20 right-[40px]  overflow-hidden cursor-pointer font-medium hover:bg-slate-50 hover:shadow-lg hover:rounded-full"
      onClick={onClick}
    >
      <SkipPreviousOutlined fontSize="medium" />
    </div>
  );
}

const Testimonial = () => {
  const settings = {
    arrows: true,
    infinite: true,
    pauseOnHover: true,
    // focusOnSelect: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-nude1 to-nude3  text-nude5 p-8">
      <Section>
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto my-20">
          <div className="w-full md:w-2/5 flex flex-col justify-center items-center md:items-start pb-8 md:pb-0 mb-10 md:mb-0">
            <h3 className="uppercase text-lg pb-5 font-medium text-center md:text-start">
              Reviews
            </h3>
            <span className="block text-5xl font-medium pb-6 text-center md:text-start">
              All our clients are happy.
            </span>
            <button className="uppercase text-sm md:self-start bg-nude4 text-[#fff] px-6 py-2 md:px-8 md:py-3 rounded-3xl md:rounded-[30px] hover:bg-nude5 hover:text-[#fff]">
              See All Reviews
            </button>
          </div>

          <div className="w-full md:w-3/5 h-auto">
            <Slider {...settings}>
              {data.map((el, index) => (
                <div key={index}>
                  <div className="ml-2 marker:mr-2 md:ml-4">
                    <div className="bg-white p-8 h-auto md:h-80 rounded-md tracking-wide leading-relaxed">
                      <span className="font-medium text-xl  text-gray-700 ">
                        {el.name}
                      </span>
                      <p className="pt-3  text-gray-500">{el.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Testimonial;
