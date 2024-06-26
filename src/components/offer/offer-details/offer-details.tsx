import {TReviews} from '../../../types/review.ts';
import {TOffer} from '../../../types/offer.ts';
import {MemoizedBookmarkButton} from '../../common/bookmark-button/bookmark-button.tsx';
import {OfferFeatures} from '../offer-features/offer-features.tsx';
import {OfferHost} from '../offer-host/offer-host.tsx';
import {OfferInside} from '../offer-inside/offer-inside.tsx';
import {OfferPrice} from '../offer-price/offer-price.tsx';
import {OfferRating} from '../offer-rating/offer-rating.tsx';
import {OfferReviews} from '../offer-reviews/offer-reviews.tsx';
import {capitalizeFirstLetter} from '../../../utils.ts';

type OfferDetailsProps = {
  offer: TOffer;
  isPremium: boolean;
  isFavorite: boolean;
  id: string | undefined;
  reviews: TReviews;
};

export function OfferDetails({offer, isPremium, isFavorite, id, reviews}: OfferDetailsProps): JSX.Element {
  const {
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
  } = offer;

  const isAvatarPro = host?.isPro ? 'offer__avatar-wrapper--pro' : '';
  const capitalizedType = capitalizeFirstLetter(type);

  return (
    <section className="offer__container container" data-testid="offerDetailsSectionElement">
      <div className="offer__wrapper">
        {isPremium && (
          <div className="offer__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">{title}</h1>
          <MemoizedBookmarkButton
            id={id}
            isFavorite={isFavorite}
            width={'31'}
            height={'31'}
            isOfferPage
          />
        </div>
        <OfferRating rating={rating}/>
        <OfferFeatures
          type={capitalizedType}
          bedrooms={bedrooms}
          maxAdults={maxAdults}
        />
        <OfferPrice price={price}/>
        <OfferInside goods={goods}/>
        <OfferHost
          isAvatarPro={isAvatarPro}
          host={host}
          description={description}
        />
        <OfferReviews reviews={reviews}/>
      </div>
    </section>
  );
}
