import {NameSpace} from '../../const.ts';
import {TState} from '../../types/state.ts';
import {TOffer, TOffers} from '../../types/offer.ts';
import {TReviews} from '../../types/review.ts';
import {TUser} from '../../types/user.ts';

export const getOffers = (state: Pick<TState, NameSpace.Data>): TOffers => state[NameSpace.Data].offers;
export const getOffersDataLoadingStatus = (state: Pick<TState, NameSpace.Data>): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getErrorStatus = (state: Pick<TState, NameSpace.Data>): boolean => state[NameSpace.Data].hasError;
export const getOffer = (state: Pick<TState, NameSpace.Data>): TOffer => state[NameSpace.Data].offer;
export const getOfferDataLoadingStatus = (state: Pick<TState, NameSpace.Data>): boolean => state[NameSpace.Data].isOfferDataLoading;
export const getComments = (state: Pick<TState, NameSpace.Data>): TReviews => state[NameSpace.Data].comments;
export const getNearbyOffers = (state: Pick<TState, NameSpace.Data>): TOffers => state[NameSpace.Data].nearbyOffers;
export const getFavoriteOffers = (state: Pick<TState, NameSpace.Data>): TOffers => state[NameSpace.Data].favoriteOffers;
export const getCommentDataSendingStatus = (state: Pick<TState, NameSpace.Data>): boolean => state[NameSpace.Data].isCommentDataSending;
export const getSubmitErrorStatus = (state: Pick<TState, NameSpace.Data>): boolean => state[NameSpace.Data].hasSubmitError;
export const getErrorOfferLoadingStatus = (state: Pick<TState, NameSpace.Data>): boolean => state[NameSpace.Data].hasOfferDataLoadingError;
export const getUserData = (state: Pick<TState, NameSpace.Data>): TUser => state[NameSpace.Data].userData;
