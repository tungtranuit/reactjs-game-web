import imgApi from '../images/photos';
import avatarApi from '../images/avatars';
const timelineData = [
  {
    id: '1',
    from: 'Tony Chen',
    date: 'September, 12 2018',
    time: '08:01',
    title: 'SHARERING.NETWORK',
    icon: 'favorite',
    avatar: avatarApi[0],
    image: '/images/shr_c.jpg',
    company: 'SHARERING.NETWORK',
    timeLine: '05/2018 - 06/2019',
    content: '+ React Native Developer.',
    apps: '+ Blockchain Wallet '
     + '\n+ The app Shares everything\n+ Crypto framework ( Swift ,Java)\n+ Block Explorer ( React JS)',
    liked: true,
    comments: [
    ]
  },
  {
    id: '2',
    from: 'Tony Chen',
    date: 'September, 10 2018',
    time: '03:20',
    icon: 'favorite',
    avatar: avatarApi[0],
    image: '/images/DSC_0632.jpg',
    company: 'CMN ONLINE Company.',
    timeLine: '11/2015 - 04/2018',
    content: '+ MOBILE LEADER.',
    apps: '+ Store Manager (APPLE STORE ,CH PLAY STORE )'
     + '\n+ Mobile Team Leader.(Leader team IOS & ANDROID)',
    liked: true,
    comments: [
    ]
  },
  {
    id: '4',
    from: 'Tony Chen',
    date: 'Aug, 10 2018',
    time: '08:05',
    icon: 'date_range',
    avatar: avatarApi[0],
    image: '/images/albums/11831800_784356815017372_5618815209206001172_n.jpg',
    company: 'INFOTECH Company',
    timeLine: '06/2015 - 10/2015',
    content: '+ Android Developer.',
    apps: '+ MayBank (App) (INFOTECH). '
     + '\n+ Tan Viet Securities Incorporation (TVSI)\n+ Saigon Securities Inc. (SSI- HOSE)',
    liked: true,
    comments: [
    ]
  },
  {
    id: '4',
    from: 'Tony Chen',
    date: 'Aug, 10 2018',
    time: '08:05',
    icon: 'date_range',
    avatar: avatarApi[0],
    image: '',
    company: 'Prosoft Outsourcing Company',
    timeLine: '07/2014 - 05/2015',
    content: '+ Android Developer.',
    apps: '+ CQ2 (cq2.com.tw) . Taiwan Client. '
     + '\n+ Tin365 (Newspaper)\n+ WEARITNOW (John Henry, Aino Sofia and Farah Vintage\n+ Youtaxi (skyward.youtaxi available in google play)\n+ GoldPay (egold888.goldpay.com)\n+ AppStore ( Chinese Client).\n+KICKOn Social(KICKOn.com)',
    liked: true,
    comments: [
      {
        id: '4_1',
        from: 'Jane Doe',
        avatar: avatarApi[2],
        date: 'May, 29 2018',
        message: 'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
      }
    ]
  },
  {
    id: '5',
    title: 'T.E.A Solutions (T.E.A)',
    from: 'Tony Chen',
    date: 'Aug, 10 2018',
    time: '02:50',
    icon: 'favorite',
    avatar: avatarApi[0],
    image: '',
    company: 'T.E.A Solutions (T.E.A) Company.',
    content: '+ Android and .NET Developer.',
    apps: '+ Smart HOME Management.',
    timeLine: '06/2013 – 07/2014',
    liked: false,
    comments: [
      {
        id: '5_1',
        from: 'Tony Chen',
        avatar: avatarApi[9],
        date: 'May, 29 2018',
        message: 'Ut sed eros finibus, placerat orci id, dapibus mauris.'
      },
      {
        id: '5_2',
        from: 'Jihan Doe',
        avatar: avatarApi[4],
        date: 'May, 29 2018',
        message: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est. '
      }
    ]
  }
];

export default timelineData;
