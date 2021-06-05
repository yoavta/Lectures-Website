const COURSE_DATA = [
  {
    id: 1,
    title: 'שיעור ראשון',
    routeName: 'lecture',
    items: [
      {
        id: 1,
        name: 'חלק ראשון - שדות',
        imageUrl: 'https://i.ytimg.com/vi_webp/beOBM_BFih8/hqdefault.webp',
        elementUrl: 'beOBM_BFih8',
        typeObject: 'YouTube'
      },
      {
        id: 2,
        name: 'חלק שני - מערכות משוואות לינאריות',
        imageUrl: 'https://i.ytimg.com/vi_webp/_L4nw7kKIAA/hqdefault.webp',
        elementUrl: '_L4nw7kKIAA',
        typeObject: 'YouTube'
      },
      {
        id: 3,
        name: 'חלק שלישי - אלגברת מטריצות',
        imageUrl: 'https://i.ytimg.com/vi_webp/1rGzrK_OrME/hqdefault.webp',
        elementUrl: '1rGzrK_OrME',
        typeObject: 'YouTube'
      },
      {
        id: 4,
        name: 'חלק רביעי - המשך כפל מטריצות, מערכת הומוגנית ולא הומוגנית, שחלוף ועקבה',
        imageUrl: 'https://i.ytimg.com/vi_webp/U1ZtvtRFEbc/hqdefault.webp',
        elementUrl: 'U1ZtvtRFEbc',
        typeObject: 'YouTube'      }
      //   ,
      // {
      //   id: 5,
      //   name: 'מטריצות הפיכות ואלמנטריות',
      //   imageUrl: 'https://i.ytimg.com/vi_webp/BeVsaazAVVo/hqdefault.webp',
      //   elementUrl: 'BeVsaazAVVo',
      //   typeObject: 'YouTube'      },
      // {
      //   id: 6,
      //   name: 'פולינומים',
      //   imageUrl: 'https://i.ytimg.com/vi_webp/beOBM_BFih8/hqdefault.webp',
      //   elementUrl: 'beOBM_BFih8',
      //   typeObject: 'YouTube'      },
      // {
      //   id: 7,
      //   name: 'שיעור חזרה',
      //   imageUrl: 'https://i.ytimg.com/vi_webp/beOBM_BFih8/hqdefault.webp',
      //   elementUrl: 'beOBM_BFih8',
      //   typeObject: 'YouTube'      },
      // {
      //   id: 8,
      //   name: 'שיעור סיכום',
      //   imageUrl: 'https://i.ytimg.com/vi_webp/beOBM_BFih8/hqdefault.webp',
      //   elementUrl: 'beOBM_BFih8',
      //   typeObject: 'YouTube'      },
      // {
      //   id: 9,
      //   name: 'שיעור פרידה',
      //   imageUrl: 'https://i.ytimg.com/vi_webp/beOBM_BFih8/hqdefault.webp',
      //   elementUrl: 'beOBM_BFih8',
      //   typeObject: 'YouTube'      }
    ]
  },
  {
    id: 2,
    title: 'שיעור שני- על משהו ',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        typeObject: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        typeObject: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        typeObject: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        typeObject: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        typeObject: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        typeObject: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        typeObject: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        typeObject: 200
      }
    ]
  },
  {
    id: 3,
    title: 'שיעור שלישי- סתם דברים',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        typeObject: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        typeObject: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        typeObject: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        typeObject: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        typeObject: 185
      }
    ]
  },
  {
    title: 'שיעור רביעי- חייזרים ויצורים',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        typeObject: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        typeObject: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        typeObject: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        typeObject: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        typeObject: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        typeObject: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        typeObject: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        typeObject: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        typeObject: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        typeObject: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        typeObject: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        typeObject: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        typeObject: 25
      }
    ]
  }
];

export default COURSE_DATA;