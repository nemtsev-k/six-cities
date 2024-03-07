import {useState} from 'react';
import {Map} from '../map/map.tsx';
import {Offer} from '../../types/offer.ts';
import {City} from '../../types/city.ts';
import {MainOffersList} from './main-offers-list/main-offers-list.tsx';

type OfferListProps = {
  currentLocation: City;
  currentOffers: Offer[];
}

export function MainOffers({currentLocation, currentOffers}: OfferListProps): JSX.Element {
  const [activeCardId, setHoveredOfferId] = useState<Offer['id'] | null>(null);

  function handleCardHover(offerId: Offer['id'] | null) {
    setHoveredOfferId(offerId);
  }

  return (
    <div className="cities__places-container container">
      <MainOffersList
        currentLocation={currentLocation}
        currentOffers={currentOffers}
        onCardHover={handleCardHover}
      />
      <Map
        city={currentLocation}
        offers={currentOffers}
        activeCardId={activeCardId}
      />
    </div>
  );
}