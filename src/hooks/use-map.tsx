import React, {useEffect, useState, useRef} from 'react';
import leaflet, {Map} from 'leaflet';
import {TLocation} from '../types/city.ts';
import {TOffers} from '../types/offer.ts';
import 'leaflet/dist/leaflet.css';
import {TILE_LAYER_URL_PATTERN, TILE_LAYER_ATTRIBUTION, DEFAULT_ZOOM} from '../components/common/map/const.ts';

type UseMapProps = {
  location?: TLocation | undefined;
  mapRef: React.RefObject<HTMLDivElement>;
  offers?: TOffers;
}

export function useMap({mapRef, location = undefined, offers = []}: UseMapProps): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect((): void => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: location ? location.latitude : 0,
          lng: location ? location.longitude : 0,
        },
        zoom: location ? location.zoom : DEFAULT_ZOOM,
      });

      leaflet
        .tileLayer(TILE_LAYER_URL_PATTERN, {
          attribution: TILE_LAYER_ATTRIBUTION,
        })
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, location, offers]);

  return map;
}
