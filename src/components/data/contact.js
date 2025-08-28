import {
  callingImg,
  contactOne,
  contactThree,
  contactTwo,
  locationImg,
  smsImg,
} from '../../assets/images';

export const contacts = [
  {
    id: 1,
    image: contactOne,
    icon: locationImg,
    title: 'Addres',
    text: 'New Jersey 45463',
  },
  {
    id: 2,
    image: contactTwo,
    icon: callingImg,
    title: 'Call',
    text: '+91 95744 68870',
  },
  {
    id: 3,
    image: contactThree,
    icon: smsImg,
    title: 'Email',
    text: 'lawcase@gmail.com',
  },
];
