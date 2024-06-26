import {SortingMap} from '../../../const.ts';
import {SortingOptions} from '../sorting-options/sorting-options.tsx';

type PlacesSortingFormProps = {
  handleSortOptionClick: () => void;
  sortOption: string;
  handleSort: (sortOption: SortingMap) => void;
  sortingOptionsVisible: boolean;
  setSortingOptionsVisible: (visible: boolean) => void;
};

export function PlacesSorting({handleSortOptionClick, sortOption, handleSort, sortingOptionsVisible, setSortingOptionsVisible}: PlacesSortingFormProps): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortOptionClick}
      >
        {sortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortingOptions
        handleSort={handleSort}
        sortingOptionsVisible={sortingOptionsVisible}
        setSortingOptionsVisible={setSortingOptionsVisible}
      />
    </form>
  );
}
