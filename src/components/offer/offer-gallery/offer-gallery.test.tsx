import {render, screen} from '@testing-library/react';
import {datatype} from 'faker';
import {getRandomNumber} from '../../../mocks/mocks.ts';
import {OfferGallery} from './offer-gallery.tsx';

describe('Component: OfferGallery', () => {
  it('should render correctly', () => {
    const gallerySectionElementTestId = 'gallerySectionElement';
    const galleryElementTestId = 'galleryElement';
    const mockImages = Array.from({length: getRandomNumber(0, 5)}, () =>
      datatype.uuid()
    );

    render(<OfferGallery images={mockImages}/>);

    expect(screen.getByTestId(gallerySectionElementTestId)).toBeInTheDocument();
    expect(screen.getByTestId(galleryElementTestId)).toBeInTheDocument();
  });
});
