import {configureMockStore} from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import {Action} from 'redux';
import thunk from 'redux-thunk';
import {APIRoute} from '../const.ts';
import {createAPI} from '../services/api.ts';
import * as tokenStorage from '../services/token.ts';
import {TAuthData} from '../types/auth-data.ts';
import {TState} from '../types/state.ts';
import {
  AppThunkDispatch,
  extractActionsTypes,
  getRandomNumber,
  makeFakeComment,
  makeFakeFavoriteOffer,
  makeFakeNearbyOffer,
  makeFakeOffer,
  makeFakeUser,
} from '../mocks/mocks.ts';
import {redirectToRoute} from './action.ts';
import {
  checkAuthAction,
  fetchCommentsAction,
  fetchFavoriteOffersAction,
  fetchNearbyOffersAction,
  fetchOfferAction,
  fetchOffersAction,
  fetchUserDataAction,
  loginAction,
  logoutAction,
  postCommentAction,
  toggleFavoriteAction,
} from './api-actions.ts';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
    TState,
    Action<string>,
    AppThunkDispatch
  >(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      DATA: {
        offers: [],
        offer: {},
        nearbyOffers: [],
        comments: [],
        favoriteOffers: [],
        userData: {},
      },
    });
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending", "redirectToRoute", "loginAction.fulfilled" when server response 200', async () => {
      const fakeUser: TAuthData = {login: 'test@test.ru', password: '123456'};
      const fakeServerReplay = {token: 'secret'};
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type,
      ]);
    });

    it('should call "saveToken" once with the received token', async () => {
      const fakeUser: TAuthData = {login: 'test@test.ru', password: '123456'};
      const fakeServerReplay = {token: 'secret'};
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeUser));

      expect(mockSaveToken).toHaveBeenCalledTimes(1);
      expect(mockSaveToken).toHaveBeenCalledWith(fakeServerReplay.token);
    });
  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should one call "dropToken" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(mockDropToken).toHaveBeenCalledTimes(1);
    });
  });

  describe('fetchOffersAction', () => {
    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.fulfilled", when server response 200', async () => {
      const mockOffer = makeFakeOffer();
      const mockOffers = Array.from(
        {length: getRandomNumber(1, 15)},
        () => mockOffer
      );
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffers);

      await store.dispatch(fetchOffersAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchOffersAction.fulfilled
      >;

      expect(extractedActionsTypes).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload).toEqual(mockOffers);
    });

    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

      await store.dispatch(fetchOffersAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.rejected.type,
      ]);
    });
  });

  describe('fetchOfferAction', () => {
    it('should dispatch "fetchOfferAction.pending", "fetchOfferAction.fulfilled", when server response 200', async () => {
      const mockOffer = makeFakeOffer();
      mockAxiosAdapter
        .onGet(`${APIRoute.Offers}/${mockOffer.id}`)
        .reply(200, mockOffer);

      await store.dispatch(fetchOfferAction(mockOffer.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOfferActionFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchOfferAction.fulfilled
      >;

      expect(extractedActionsTypes).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.fulfilled.type,
      ]);

      expect(fetchOfferActionFulfilled.payload).toEqual(mockOffer);
    });

    it('should dispatch "fetchOfferAction.pending", "fetchOfferAction.rejected" when server response 400', async () => {
      const mockOffer = makeFakeOffer();

      mockAxiosAdapter
        .onGet(`${APIRoute.Offers}/${mockOffer.id}`)
        .reply(400, {});

      await store.dispatch(fetchOfferAction(mockOffer.id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.rejected.type,
      ]);
    });
  });

  describe('fetchNearbyOffersAction', () => {
    it('should dispatch "fetchNearbyOffersAction.pending", "fetchNearbyOffersAction.fulfilled", when server response 200', async () => {
      const mockOffer = makeFakeOffer();
      const mockNearbyOffer = makeFakeNearbyOffer();
      const mockNearbyOffers = Array.from(
        {length: getRandomNumber(1, 15)},
        () => mockNearbyOffer
      );

      mockAxiosAdapter
        .onGet(`${APIRoute.Offers}/${mockOffer.id}/nearby`)
        .reply(200, mockNearbyOffers);

      await store.dispatch(fetchNearbyOffersAction(mockOffer.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchNearbyOffersActionFulfilled = emittedActions.at(
        1
      ) as ReturnType<typeof fetchNearbyOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchNearbyOffersAction.pending.type,
        fetchNearbyOffersAction.fulfilled.type,
      ]);

      expect(fetchNearbyOffersActionFulfilled.payload).toEqual(
        mockNearbyOffers
      );
    });

    it('should dispatch "fetchNearbyOffersAction.pending", "fetchNearbyOffersAction.rejected" when server response 400', async () => {
      const mockOffer = makeFakeOffer();

      mockAxiosAdapter
        .onGet(`${APIRoute.Offers}/${mockOffer.id}/nearby`)
        .reply(400, []);

      await store.dispatch(fetchNearbyOffersAction(mockOffer.id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearbyOffersAction.pending.type,
        fetchNearbyOffersAction.rejected.type,
      ]);
    });
  });

  describe('fetchCommentsAction', () => {
    it('should dispatch "fetchCommentsAction.pending", "fetchCommentsAction.fulfilled", when server response 200', async () => {
      const mockOffer = makeFakeOffer();
      const mockComment = makeFakeComment();
      const mockComments = Array.from(
        {length: getRandomNumber(1, 15)},
        () => mockComment
      );

      mockAxiosAdapter
        .onGet(`${APIRoute.Comments}/${mockOffer.id}`)
        .reply(200, mockComments);

      await store.dispatch(fetchCommentsAction(mockOffer.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchCommentsActionFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchCommentsAction.fulfilled
      >;

      expect(extractedActionsTypes).toEqual([
        fetchCommentsAction.pending.type,
        fetchCommentsAction.fulfilled.type,
      ]);

      expect(fetchCommentsActionFulfilled.payload).toEqual(mockComments);
    });

    it('should dispatch "fetchCommentsAction.pending", "fetchCommentsAction.rejected" when server response 400', async () => {
      const mockOffer = makeFakeOffer();

      mockAxiosAdapter
        .onGet(`${APIRoute.Comments}/${mockOffer.id}/`)
        .reply(400, []);

      await store.dispatch(fetchCommentsAction(mockOffer.id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchCommentsAction.pending.type,
        fetchCommentsAction.rejected.type,
      ]);
    });
  });

  describe('fetchFavoriteOffersAction', () => {
    it('should dispatch "fetchFavoriteOffersAction.pending", "fetchFavoriteOffersAction.fulfilled", when server response 200', async () => {
      const mockFavoriteOffer = makeFakeFavoriteOffer();
      const mockFavoriteOffers = Array.from(
        {length: getRandomNumber(1, 15)},
        () => mockFavoriteOffer
      );

      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockFavoriteOffers);

      await store.dispatch(fetchFavoriteOffersAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoriteOffersActionFulfilled = emittedActions.at(
        1
      ) as ReturnType<typeof fetchFavoriteOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteOffersAction.pending.type,
        fetchFavoriteOffersAction.fulfilled.type,
      ]);

      expect(fetchFavoriteOffersActionFulfilled.payload).toEqual(
        mockFavoriteOffers
      );
    });

    it('should dispatch "fetchFavoriteOffersAction.pending", "fetchFavoriteOffersAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(400, []);

      await store.dispatch(fetchFavoriteOffersAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoriteOffersAction.pending.type,
        fetchFavoriteOffersAction.rejected.type,
      ]);
    });
  });

  describe('postCommentAction', () => {
    it('should dispatch "postCommentAction.pending", "postCommentAction.fulfilled", when server response 200', async () => {
      const mockOffer = makeFakeOffer();
      const mockComment = makeFakeComment();
      const mockCommentData = {
        id: mockOffer.id,
        comment: mockComment.comment,
        rating: mockComment.rating,
      };

      mockAxiosAdapter
        .onPost(`${APIRoute.Comments}/${mockOffer.id}`)
        .reply(200, mockComment);

      await store.dispatch(postCommentAction(mockCommentData));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const postCommentActionFulfilled = emittedActions.at(1) as ReturnType<
        typeof postCommentAction.fulfilled
      >;

      expect(extractedActionsTypes).toEqual([
        postCommentAction.pending.type,
        postCommentAction.fulfilled.type,
      ]);

      expect(postCommentActionFulfilled.payload).toEqual(mockComment);
    });

    it('should dispatch "postCommentAction.pending", "postCommentAction.rejected" when server response 400', async () => {
      const mockOffer = makeFakeOffer();
      const mockComment = makeFakeComment();
      const mockCommentData = {
        id: mockOffer.id,
        comment: mockComment.comment,
        rating: mockComment.rating,
      };

      mockAxiosAdapter
        .onPost(`${APIRoute.Comments}/${mockOffer.id}`)
        .reply(400, {});

      await store.dispatch(postCommentAction(mockCommentData));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postCommentAction.pending.type,
        postCommentAction.rejected.type,
      ]);
    });
  });

  describe('toggleFavoriteAction', () => {
    it('should dispatch "toggleFavoriteAction.pending", "toggleFavoriteAction.fulfilled", when server response 200', async () => {
      const mockOffer = makeFakeOffer();
      const toggledFavoriteMockOffer = {
        ...mockOffer,
        isFavorite: !mockOffer.isFavorite,
      };
      const toggledFavoriteData = {
        id: mockOffer.id,
        status: Number(!mockOffer.isFavorite),
      };

      mockAxiosAdapter
        .onPost(
          `${APIRoute.Favorite}/${mockOffer.id}/${Number(
            !mockOffer.isFavorite
          )}`
        )
        .reply(200, toggledFavoriteMockOffer);

      await store.dispatch(toggleFavoriteAction(toggledFavoriteData));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const toggleFavoriteActionFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchOfferAction.fulfilled
      >;

      expect(extractedActionsTypes).toEqual([
        toggleFavoriteAction.pending.type,
        toggleFavoriteAction.fulfilled.type,
      ]);

      expect(toggleFavoriteActionFulfilled.payload).toEqual(
        toggledFavoriteMockOffer
      );
    });

    it('should dispatch "toggleFavoriteAction.pending", "toggleFavoriteAction.rejected" when server response 400', async () => {
      const mockOffer = makeFakeOffer();

      const toggledFavoriteData = {
        id: mockOffer.id,
        status: Number(!mockOffer.isFavorite),
      };

      mockAxiosAdapter
        .onPost(
          `${APIRoute.Favorite}/${mockOffer.id}/${Number(
            !mockOffer.isFavorite
          )}`
        )
        .reply(400, {});

      await store.dispatch(toggleFavoriteAction(toggledFavoriteData));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        toggleFavoriteAction.pending.type,
        toggleFavoriteAction.rejected.type,
      ]);
    });
  });
  describe('fetchUserData', () => {
    it('should dispatch "fetchUserDataAction.pending", "fetchUserDataAction.fulfilled", when server response 200', async () => {
      const mockUser = makeFakeUser();
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200, mockUser);

      await store.dispatch(fetchUserDataAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchUserDataActionFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchUserDataAction.fulfilled
      >;

      expect(extractedActionsTypes).toEqual([
        fetchUserDataAction.pending.type,
        fetchUserDataAction.fulfilled.type,
      ]);

      expect(fetchUserDataActionFulfilled.payload).toEqual(mockUser);
    });

    it('should dispatch "fetchUserDataAction.pending", "fetchUserDataAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400, []);

      await store.dispatch(fetchUserDataAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchUserDataAction.pending.type,
        fetchUserDataAction.rejected.type,
      ]);
    });
  });
});
