import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import {withHistory} from '../../../mocks/mock-component.tsx';
import {HeaderNavItemListItem} from './header-nav-item-list-item.tsx';

describe('Component: HeaderNavItemListItem', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const headerNavItemElementTestId = 'headerNavItemElement';
    const withHistoryComponent = withHistory(
      <HeaderNavItemListItem onLogout={() => {}}/>,
      mockHistory
    );

    render(withHistoryComponent);

    expect(screen.getByTestId(headerNavItemElementTestId)).toBeInTheDocument();
  });
});
