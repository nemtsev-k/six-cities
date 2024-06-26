import {NameSpace} from '../../const';
import {
  getCommentDataSendingStatus,
  getComments,
  getErrorOfferLoadingStatus,
  getErrorStatus,
  getFavoriteOffers,
  getNearbyOffers,
  getOffer,
  getOfferDataLoadingStatus,
  getOffers,
  getOffersDataLoadingStatus,
  getSubmitErrorStatus,
  getUserData,
} from './app-data.selectors.ts';
import {TState} from '../../types/state.ts';
import {
  getRandomNumber,
  makeFakeComment,
  makeFakeFavoriteOffer,
  makeFakeNearbyOffer,
  makeFakeOffer,
  makeFakeUser,
} from '../../mocks/mocks.ts';

describe('AppData selectors', () => {
  const mockOffer = makeFakeOffer();
  const mockOffers = Array.from(
    {length: getRandomNumber(1, 15)},
    () => mockOffer
  );
  const mockComment = makeFakeComment();
  const mockComments = Array.from(
    {length: getRandomNumber(1, 15)},
    () => mockComment
  );
  const mockNearbyOffer = makeFakeNearbyOffer();
  const mockNearbyOffers = Array.from(
    {length: getRandomNumber(1, 15)},
    () => mockNearbyOffer
  );
  const mockFavoriteOffer = makeFakeFavoriteOffer();
  const mockFavoriteOffers = Array.from(
    {length: getRandomNumber(1, 15)},
    () => mockFavoriteOffer
  );

  const mockUser = makeFakeUser();

  const mockState = {
    [NameSpace.Data]: {
      offers: mockOffers,
      isOffersDataLoading: true,
      hasError: true,
      offer: mockOffer,
      isOfferDataLoading: true,
      comments: mockComments,
      nearbyOffers: mockNearbyOffers,
      favoriteOffers: mockFavoriteOffers,
      isCommentDataSending: true,
      hasSubmitError: true,
      hasOfferDataLoadingError: true,
      userData: mockUser,
    },
  };

  describe('getOffers', () => {
    it('should return correct offers from the given state', () => {
      const {offers} = mockState[NameSpace.Data];
      const result = getOffers(mockState as Pick<TState, NameSpace.Data>);
      expect(result).toEqual(offers);
    });

    it('should return empty array when no offers', () => {
      mockState[NameSpace.Data].offers = [];
      const result = getOffers(mockState as Pick<TState, NameSpace.Data>);
      expect(result).toEqual([]);
    });

    it('should return undefined when offers not present', () => {
      mockState[NameSpace.Data] = {} as TState[NameSpace.Data];
      const result = getOffers(mockState as Pick<TState, NameSpace.Data>);
      expect(result).toBeUndefined();
    });
  });

  describe('getOffersDataLoadingStatus', () => {
    it('should return true when isOffersDataLoading is true', () => {
      mockState[NameSpace.Data].isOffersDataLoading = true;
      const result = getOffersDataLoadingStatus(
        mockState as Pick<TState, NameSpace.Data>
      );
      expect(result).toBe(true);
    });
  });

  describe('getErrorStatus', () => {
    it('should return true when hasError is true', () => {
      mockState[NameSpace.Data].hasError = true;
      const result = getErrorStatus(mockState as Pick<TState, NameSpace.Data>);
      expect(result).toBe(true);
    });
  });

  describe('getOffer', () => {
    it('should return correct offer from the given state', () => {
      const {offer} = mockState[NameSpace.Data];
      const result = getOffer(mockState as Pick<TState, NameSpace.Data>);
      expect(result).toEqual(offer);
    });

    it('should return undefined when offer not present', () => {
      mockState[NameSpace.Data] = {} as TState[NameSpace.Data];
      const result = getOffer(mockState as Pick<TState, NameSpace.Data>);
      expect(result).toBeUndefined();
    });
  });

  describe('isOfferDataLoading ', () => {
    it('should return true when isOfferDataLoading is true', () => {
      mockState[NameSpace.Data].isOfferDataLoading = true;
      const result = getOfferDataLoadingStatus(
        mockState as Pick<TState, NameSpace.Data>
      );
      expect(result).toBe(true);
    });
  });

  describe('getComments', () => {
    it('should return correct comments from the given state', () => {
      const {comments} = mockState[NameSpace.Data];
      const result = getComments(mockState as Pick<TState, NameSpace.Data>);
      expect(result).toEqual(comments);
    });

    it('should return an empty array if there are no comments in the state', () => {
      mockState[NameSpace.Data].comments = [];
      const result = getComments(mockState as Pick<TState, NameSpace.Data>);
      expect(result).toEqual([]);
    });
  });

  describe('getNearbyOffers', () => {
    it('should return correct nearby offers from the given state', () => {
      const {nearbyOffers} = mockState[NameSpace.Data];
      const result = getNearbyOffers(mockState as Pick<TState, NameSpace.Data>);
      expect(result).toEqual(nearbyOffers);
    });

    it('should return an empty array if there are no nearby offers in the state', () => {
      mockState[NameSpace.Data].nearbyOffers = [];
      const result = getNearbyOffers(mockState as Pick<TState, NameSpace.Data>);
      expect(result).toEqual([]);
    });
  });

  describe('getFavoriteOffers', () => {
    it('should return correct favorite offers from the given state', () => {
      const {favoriteOffers} = mockState[NameSpace.Data];
      const result = getFavoriteOffers(
        mockState as Pick<TState, NameSpace.Data>
      );
      expect(result).toEqual(favoriteOffers);
    });

    it('should return empty array when no favorite offers', () => {
      mockState[NameSpace.Data].favoriteOffers = [];
      const result = getFavoriteOffers(
        mockState as Pick<TState, NameSpace.Data>
      );
      expect(result).toEqual([]);
    });

    it('should return undefined when favorite offers not present', () => {
      mockState[NameSpace.Data] = {} as TState[NameSpace.Data];
      const result = getOffers(mockState as Pick<TState, NameSpace.Data>);
      expect(result).toBeUndefined();
    });
  });

  describe('getCommentDataSendingStatus', () => {
    it('should return true when isCommentDataSending is true', () => {
      mockState[NameSpace.Data].isCommentDataSending = true;
      const result = getCommentDataSendingStatus(
        mockState as Pick<TState, NameSpace.Data>
      );
      expect(result).toBe(true);
    });
  });

  describe('getSubmitErrorStatus', () => {
    it('should return true when state hasSubmitError is true', () => {
      mockState[NameSpace.Data].hasSubmitError = true;
      const result = getSubmitErrorStatus(
        mockState as Pick<TState, NameSpace.Data>
      );
      expect(result).toBe(true);
    });
  });

  describe('getErrorOfferLoadingStatus', () => {
    it('should return true when hasOfferDataLoadingError is true', () => {
      mockState[NameSpace.Data].hasOfferDataLoadingError = true;
      const result = getErrorOfferLoadingStatus(
        mockState as Pick<TState, NameSpace.Data>
      );
      expect(result).toBe(true);
    });
  });

  describe('getUserData', () => {
    it('should return correct UserData', () => {
      const {userData} = mockState[NameSpace.Data];
      const result = getUserData(mockState as Pick<TState, NameSpace.Data>);
      expect(result).toEqual(userData);
    });

    it('should return undefined when user authorization status not present', () => {
      mockState[NameSpace.Data] = {} as TState[NameSpace.Data];
      expect(
        getUserData(mockState as Pick<TState, NameSpace.Data>)
      ).toBeUndefined();
    });
  });
});
