import {
 info_1,
 info_2,
 info_3,
 info_4,
 stats_1,
 stats_2,
 stats_3,
  vrbo,
  hopper,
  booking,
  airbnb,
  google
} from '../assets';
import { EBoxItemColor } from '../components/atoms/box-item';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'product',
    title: 'Product',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
];

export const info = [
  {
    id: 'info-1',
    logo: info_1,
    text: 'Outperform the market with our  advanced revenue technology',
  },
  {
    id: 'info-2',
    logo: info_2,
    text: 'Leave the pressure of marketing, booking, and pricing your property to the experts',
  },
  {
    id: 'info-3',
    logo: info_3,
    text: 'Keep more of what you earn with our industry-low 10% fee',
  },
  {
    id: 'info-4',
    logo: info_4,
     text: `Don't worry about long-term commitments with restrictive policies`,
  },
];

export const stats = [
  {
    id: 'stats-1',
    logo: stats_3,
    title: 'in rental income earned ',
    value: '8 million+',
    color: EBoxItemColor.GREEN,
  },
  {
    id: 'stats-2',
    logo: stats_2,
    title: 'guests hosted',
    value: '100 000+',
    color:  EBoxItemColor.ORANGE,
  },
  {
    id: 'stats-3',
    logo: stats_1,
    title: 'guest rating',
    value: 'Average 4.7',
    color:  EBoxItemColor.BLUE,
  },
];

export const partners = [
  {
    id: 'google',
    logo:  google
  },
  {
    id: 'airbnb',
    logo:  airbnb
  },
  {
    id: 'booking',
    logo:  booking
  },
  {
    id: 'vrbo',
    logo:  vrbo
  },
  {
    id: 'hooper',
    logo:  hopper,
  },
]