import {Offer} from './types/offer.ts';

import {AVATAR_URL, MAX_RATING, HOTEL_IMAGE_URL} from './const.ts';

export function getRandomItem<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

export function getRatingWidth(rating: number) {
  return `${Math.round(rating / MAX_RATING) * 100}%`;
}

export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomBoolean() {
  return Math.random() < 0.5;
}

export function getRandomAvatar() {
  return `${AVATAR_URL}?rnd=${getRandomNumber(1, 1000)}`;
}

export function getRandomHotelImage() {
  return `${HOTEL_IMAGE_URL}?rnd=${getRandomNumber(1, 1000)}`;
}

function sortByRating(itemA: Offer, itemB: Offer) {
  return itemB.rating - itemA.rating;
}

function sortFromLowToHigh(itemA: Offer, itemB: Offer) {
  return itemA.price - itemB.price;
}

function sortFromHighToLow(itemA: Offer, itemB: Offer) {
  return itemB.price - itemA.price;
}

export const sorting = {
  Popular: (offers: Offer[]) => offers.slice(),
  HighToLow: (offers: Offer[]) => offers.toSorted(sortFromHighToLow),
  LowToHigh: (offers: Offer[]) => offers.toSorted(sortFromLowToHigh),
  TopRating: (offers: Offer[]) => offers.toSorted(sortByRating),
};
