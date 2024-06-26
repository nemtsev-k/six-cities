import {DEFAULT_ZOOM} from './components/common/map/const.ts';
import {TAppData} from './types/state.ts';

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
export const MAX_IMAGES_COUNT = 6;
export const MAX_OFFER_PAGE_NEARBY_OFFERS_COUNT = 3;
export const MAX_OFFER_SCREEN_COMMENTS_COUNT = 10;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*',
  Lose = '/lose',
}

export enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ratingsData = [
  {value: '5', title: 'perfect'},
  {value: '4', title: 'good'},
  {value: '3', title: 'not bad'},
  {value: '2', title: 'badly'},
  {value: '1', title: 'terribly'},
];

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const DEFAULT_CITY_NAME = Cities.Paris;

export const citiesNames = Array.from(Object.values(Cities));

export const cityCoordinates = [
  {
    name: 'PARIS',
    location: {
      latitude: 48.85341,
      longitude: 2.3488,
      zoom: DEFAULT_ZOOM,
    },
  },
  {
    name: 'COLOGNE',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: DEFAULT_ZOOM,
    },
  },
  {
    name: 'BRUSSELS',
    location: {
      latitude: 50.85045,
      longitude: 4.34878,
      zoom: DEFAULT_ZOOM,
    },
  },
  {
    name: 'AMSTERDAM',
    location: {
      latitude: 52.37454,
      longitude: 4.889689,
      zoom: DEFAULT_ZOOM,
    },
  },
  {
    name: 'HAMBURG',
    location: {
      latitude: 53.551086,
      longitude: 10.000654,
      zoom: DEFAULT_ZOOM,
    },
  },
  {
    name: 'DUSSELDORF',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: DEFAULT_ZOOM,
    },
  },
];

export enum SortingMap {
  Popular = 'Popular',
  LowToHighPrice = 'Price: low to high',
  HighToLowPrice = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}

export const DEFAULT_STATE = {
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
  },
  DATA: {
    offers: [],
    isOffersDataLoading: false,
    hasError: false,
    isToggleFavoriteLoading: false,
    offer: {} as TAppData['offer'],
    isOfferDataLoading: false,
    comments: [],
    nearbyOffers: [],
    favoriteOffers: [],
    isCommentDataSending: false,
    hasSubmitError: false,
    hasOfferDataLoadingError: false,
    isUserDataLoading: false,
    userData: {} as TAppData['userData'],
  },
  APP: {city: DEFAULT_CITY_NAME},
};
