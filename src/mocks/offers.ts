import {cities} from './cities.ts';
import {getRandomItem, getRandomNumber, getRandomBoolean, getRandomAvatar, getRandomHotelImage} from '../utils.ts';
import {Offer} from '../types/offer.ts';

export const mockOffers: Offer[] = [
  {
    id: 'of-01',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: getRandomNumber(50, 500),
    city: getRandomItem(cities),
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    isFavorite: getRandomBoolean(),
    isPremium: getRandomBoolean(),
    rating: 4,
    previewImage: getRandomHotelImage(),
    description: 'A splendid new villa, all on one floor. It boasts every amenity, including a jacuzzi and breathtaking scenery. Perfect for families or friends.',
    bedrooms: getRandomNumber(1, 4),
    goods: [
      'Washing machine',
      'Laptop friendly workspace',
      'Towels',
      'Baby seat',
      'Air conditioning',
      'Coffee machine',
      'Fridge',
      'Breakfast',
      'Washer',
      'Dishwasher'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: getRandomAvatar(),
      isPro: getRandomBoolean(),
    },
    images: [
      getRandomHotelImage(),
      getRandomHotelImage(),
      getRandomHotelImage(),
    ],
    maxAdults: getRandomNumber(1, 6),
  },
  {
    id: 'of-02',
    title: 'Cozy apartment in the heart of the city',
    type: 'apartment',
    price: getRandomNumber(50, 500),
    city: getRandomItem(cities),
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    isFavorite: getRandomBoolean(),
    isPremium: getRandomBoolean(),
    rating: 4.5,
    previewImage: getRandomHotelImage(),
    description: 'This villa is a gem! Spacious, beautifully designed, and equipped with a jacuzzi that\'s simply divine. Highly recommended for family getaways.',
    bedrooms: getRandomNumber(1, 4),
    goods: [
      'WiFi',
      'Heating',
      'Kitchen',
      'Hair dryer',
      'TV',
      'Iron',
      'Shampoo',
      'Hangers',
      'Elevator',
      'Crib',
    ],
    host: {
      name: 'Ava Johnson',
      avatarUrl: getRandomAvatar(),
      isPro: getRandomBoolean(),
    },
    images: [
      getRandomHotelImage(),
      getRandomHotelImage(),
      getRandomHotelImage(),
    ],
    maxAdults: getRandomNumber(1, 6),
  },
  {
    id: 'of-03',
    title: 'Spacious penthouse with stunning views',
    type: 'penthouse',
    price: getRandomNumber(50, 500),
    city: getRandomItem(cities),
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12,
    },
    isFavorite: getRandomBoolean(),
    isPremium: getRandomBoolean(),
    rating: 5,
    previewImage: getRandomHotelImage(),
    description: 'A brand-new villa with spacious rooms and stunning decor. The jacuzzi is a fantastic touch! Highly recommend for family vacations.',
    bedrooms: getRandomNumber(1, 4),
    goods: [
      'Jacuzzi',
      'Balcony',
      'Concierge',
      'Gym',
      'Parking',
      'Sauna',
      'Smart TV',
      'Fireplace',
      'Security system',
      'Terrace',
    ],
    host: {
      name: 'Charlotte Williams',
      avatarUrl: getRandomAvatar(),
      isPro: getRandomBoolean(),
    },
    images: [
      getRandomHotelImage(),
      getRandomHotelImage(),
      getRandomHotelImage(),
      getRandomHotelImage(),
    ],
    maxAdults: getRandomNumber(1, 6),
  },
  {
    id: 'of-04',
    title: 'Charming loft with city skyline view',
    type: 'loft',
    price: getRandomNumber(50, 500),
    city: getRandomItem(cities),
    location: {
      latitude: 52.3909553943508,
      longitude: 4.939309666406198,
      zoom: 12,
    },
    isFavorite: getRandomBoolean(),
    isPremium: getRandomBoolean(),
    rating: 4.2,
    previewImage: getRandomHotelImage(),
    description: 'What a find! This villa offers comfort, charm, a jacuzzi, and stunning views. An ideal spot for relaxation and quality time with loved ones.',
    bedrooms: getRandomNumber(1, 4),
    goods: [
      'WiFi',
      'Heating',
      'Kitchen',
      'Hair dryer',
      'TV',
      'Iron',
      'Shampoo',
      'Hangers',
      'Elevator',
      'Crib',
    ],
    host: {
      name: 'Liam Smith',
      avatarUrl: getRandomAvatar(),
      isPro: getRandomBoolean(),
    },
    images: [
      getRandomHotelImage(),
      getRandomHotelImage(),
    ],
    maxAdults: getRandomNumber(1, 6),
  },
  {
    id: 'of-05',
    title: 'Modern and stylish apartment with garden',
    type: 'apartment',
    price: getRandomNumber(50, 500),
    city: getRandomItem(cities),
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    isFavorite: getRandomBoolean(),
    isPremium: getRandomBoolean(),
    rating: 4.8,
    previewImage: getRandomHotelImage(),
    description: 'Absolutely loved our stay at this villa! The layout is perfect, the jacuzzi is a dream, and the scenery is unmatched. Highly recommend for family vacations.',
    bedrooms: getRandomNumber(1, 4),
    goods: [
      'WiFi',
      'Heating',
      'Kitchen',
      'Hair dryer',
      'TV',
      'Iron',
      'Shampoo',
      'Hangers',
      'Elevator',
      'Crib',
    ],
    host: {
      name: 'Charlotte Williams',
      avatarUrl: getRandomAvatar(),
      isPro: getRandomBoolean(),
    },
    images: [
      getRandomHotelImage(),
      getRandomHotelImage(),
      getRandomHotelImage(),
    ],
    maxAdults: getRandomNumber(1, 6),
  },
  {
    id: 'of-06',
    title: 'Cozy loft with panoramic view',
    type: 'apartment',
    price: getRandomNumber(50, 500),
    city: getRandomItem(cities),
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    isFavorite: getRandomBoolean(),
    isPremium: getRandomBoolean(),
    rating: 4.5,
    previewImage: getRandomHotelImage(),
    description: 'This villa is paradise! The jacuzzi was a hit with everyone, and the scenery is breathtaking. Perfect for families or friends looking for a relaxing getaway.',
    bedrooms: getRandomNumber(1, 4),
    goods: [
      'WiFi',
      'Air conditioning',
      'Breakfast',
      'Gym',
      'Pool',
      'Parking',
      'Balcony',
      'Pets allowed',
      'Fireplace',
      'Security system',
    ],
    host: {
      name: 'Liam Smith',
      avatarUrl: getRandomAvatar(),
      isPro: getRandomBoolean(),
    },
    images: [
      getRandomHotelImage(),
      getRandomHotelImage(),
      getRandomHotelImage(),
      getRandomHotelImage(),
      getRandomHotelImage(),
    ],
    maxAdults: getRandomNumber(1, 6),
  },
  {
    id: 'of-07',
    title: 'Spacious penthouse with city skyline view',
    type: 'penthouse',
    price: getRandomNumber(50, 500),
    city: getRandomItem(cities),
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12,
    },
    isFavorite: getRandomBoolean(),
    isPremium: getRandomBoolean(),
    rating: 4.9,
    previewImage: getRandomHotelImage(),
    description: 'An oasis of comfort and luxury! This villa has it all - spacious rooms, modern amenities, and a jacuzzi that\'s perfect for unwinding after a day of exploring.',
    bedrooms: getRandomNumber(1, 4),
    goods: [
      'WiFi',
      'Heating',
      'Kitchen',
      'Hair dryer',
      'TV',
      'Iron',
      'Shampoo',
      'Hangers',
      'Elevator',
      'Crib',
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: getRandomAvatar(),
      isPro: getRandomBoolean(),
    },
    images: [
      getRandomHotelImage(),
      getRandomHotelImage(),
      getRandomHotelImage(),
    ],
    maxAdults: getRandomNumber(1, 6),
  },
  {
    id: 'of-08',
    title: 'Charming cottage near the forest',
    type: 'cottage',
    price: getRandomNumber(50, 500),
    city: getRandomItem(cities),
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12,
    },
    isFavorite: getRandomBoolean(),
    isPremium: getRandomBoolean(),
    rating: 4.3,
    previewImage: getRandomHotelImage(),
    description: 'Our stay at this villa exceeded all expectations! The jacuzzi was a delightful surprise, and the views were simply spectacular. Highly recommend for families.',
    bedrooms: getRandomNumber(1, 4),
    goods: [
      'WiFi',
      'Heating',
      'Fireplace',
      'Balcony',
      'Pets allowed',
      'Parking',
      'Kitchen',
      'TV',
      'DVD player',
      'Washer',
    ],
    host: {
      name: 'Ava Johnson',
      avatarUrl: getRandomAvatar(),
      isPro: getRandomBoolean(),
    },
    images: [
      getRandomHotelImage(),
      getRandomHotelImage(),
      getRandomHotelImage(),
    ],
    maxAdults: getRandomNumber(1, 6),
  },
  {
    id: 'of-09',
    title: 'Luxury villa with private beach access',
    type: 'villa',
    price: getRandomNumber(50, 500),
    city: getRandomItem(cities),
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    isFavorite: getRandomBoolean(),
    isPremium: getRandomBoolean(),
    rating: 5.0,
    previewImage: getRandomHotelImage(),
    description: 'A fantastic villa for a family retreat! The jacuzzi was a hit with the kids, and the adults loved the scenic views. Can\'t wait to come back!',
    bedrooms: getRandomNumber(1, 4),
    goods: [
      'WiFi',
      'Heating',
      'Kitchen',
      'Hair dryer',
      'TV',
      'Iron',
      'Shampoo',
      'Hangers',
      'Elevator',
      'Crib',
    ],
    host: {
      name: 'Charlotte Williams',
      avatarUrl: getRandomAvatar(),
      isPro: getRandomBoolean(),
    },
    images: [
      getRandomHotelImage(),
      getRandomHotelImage(),
      getRandomHotelImage(),
    ],
    maxAdults: getRandomNumber(1, 6),
  },
  {
    id: 'of-10',
    title: 'Rustic cabin in the mountains',
    type: 'cabin',
    price: getRandomNumber(50, 500),
    city: getRandomItem(cities),
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    isFavorite: getRandomBoolean(),
    isPremium: getRandomBoolean(),
    rating: 4.2,
    previewImage: getRandomHotelImage(),
    description: 'This villa is a dream come true! From the jacuzzi to the picturesque surroundings, every detail was perfect. Ideal for families seeking a tranquil escape.',
    bedrooms: getRandomNumber(1, 4),
    goods: [
      'WiFi',
      'Heating',
      'Fireplace',
      'Balcony',
      'Pets allowed',
      'Parking',
      'Kitchen',
      'TV',
      'DVD player',
      'Washer',
    ],
    host: {
      name: 'Liam Smith',
      avatarUrl: getRandomAvatar(),
      isPro: getRandomBoolean(),
    },
    images: [
      getRandomHotelImage(),
      getRandomHotelImage(),
      getRandomHotelImage(),
      getRandomHotelImage(),
    ],
    maxAdults: getRandomNumber(1, 6),
  }
];