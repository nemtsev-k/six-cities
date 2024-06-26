import {render, screen} from '@testing-library/react';
import {ReviewsFormTextarea} from './reviews-form-textarea.tsx';

describe('Component: ReviewsFormTextarea', () => {
  it('should render correctly', () => {
    const expectedPlaceholderText = new RegExp(/Tell how was your stay/i);

    render(
      <ReviewsFormTextarea
        review={''}
        handleReviewChange={() => {}}
        isFormDisabled={false}
      />
    );

    expect(
      screen.getByPlaceholderText(expectedPlaceholderText)
    ).toBeInTheDocument();
  });
});
