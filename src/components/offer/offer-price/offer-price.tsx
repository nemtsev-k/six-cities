import {TOffer} from '../../../types/offer.ts';

type OfferPriceProps = {
  price: TOffer['price'];
};

export function OfferPrice({price}: OfferPriceProps): JSX.Element {
  return (
    <div className="offer__price">
      <b className="offer__price-value">&euro;{price}</b>
      <span className="offer__price-text">&nbsp;night</span>
    </div>
  );
}
