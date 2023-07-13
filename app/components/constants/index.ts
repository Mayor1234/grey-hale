import detailImg from '../../../public/images/decor1.jpg';
import designImg from '../../../public/images/decor2.jpg';
import styleImg from '../../../public/images/decor3.jpg';

export const menuItems = [
  {
    url: 'how it works',
    title: 'how it works',
    flyouts: [
      {
        url: 'the detail',
        title: 'the details',
        imgr: detailImg,
      },
      {
        url: 'desinger',
        title: 'desinger',
        imgr: designImg,
      },
      {
        url: 'styles_urveys',
        title: 'style surveys',
        imgr: styleImg,
      },
    ],
  },

  {
    url: 'shop',
    title: 'shop',
    flyouts: [
      {
        url: 'category',
        title: 'category',
        img: detailImg,
        subfly: [
          {
            url: 'furniture',
            title: 'furniture',
          },
          {
            url: 'decor&pillows',
            title: 'decor & pillows',
          },
          {
            url: 'rugs',
            title: 'rugs',
          },
          {
            url: 'lighting',
            title: 'lighting',
          },
        ],
      },
      {
        url: 'featured',
        title: 'featured',

        subfly: [
          {
            url: 'sophisticated materials',
            title: 'sophisticated materials',
          },
          {
            url: 'antique furniture',
            title: 'antique furniture',
          },
          {
            url: 'rich finishes',
            title: 'rich finishes',
          },
          {
            url: 'soft colors',
            title: 'soft colors',
          },
          {
            url: 'standard lighting',
            title: 'standard lighting',
          },
        ],
      },
      // {
      //   img: detailImg,
      // },
    ],
  },

  {
    url: 'blog',
    title: 'blog',
  },

  {
    url: 'explore',
    title: 'explore',

    flyouts: [
      {
        url: 'by room',
        title: 'by room',
        img: designImg,

        subfly: [
          {
            url: 'living_room',
            title: 'living room',
          },
          {
            url: 'bedroom',
            title: 'bedroom',
          },
          {
            url: 'kitchen',
            title: 'kitchen',
          },
          {
            url: 'office',
            title: 'office',
          },
        ],
      },
      {
        url: 'style',
        title: 'by style',
        subfly: [
          {
            url: 'modern',
            title: 'modern',
          },
          {
            url: 'african',
            title: 'african',
          },
          {
            url: 'gothic',
            title: 'gothic',
          },
          {
            url: 'minimalist',
            title: 'minimalist',
          },
          {
            url: 'victorian',
            title: 'victorian',
          },
          {
            url: 'glam',
            title: 'glam',
          },
          {
            url: 'rustic',
            title: 'rustic',
          },
          {
            url: 'scandinavian',
            title: 'scandinavian',
          },
        ],
      },
      // {
      //   img: designImg,
      // },
    ],
  },
];
