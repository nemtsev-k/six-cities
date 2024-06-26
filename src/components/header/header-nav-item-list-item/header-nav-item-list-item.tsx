import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const.ts';

type HeaderNavItemListItemProps = {
  onLogout: (event: React.MouseEvent) => void;
};

export function HeaderNavItemListItem({onLogout}: HeaderNavItemListItemProps): JSX.Element {
  return (
    <li className="header__nav-item" data-testid="headerNavItemElement">
      <Link className="header__nav-link" to={AppRoute.Main} onClick={onLogout}>
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}
