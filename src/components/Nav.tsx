import Link from 'next/link';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import palette from '../utils/palette';

const NavWrapper = styled.nav`
  display: flex;
  background-color: ${palette.colors.background};
  justify-content: center;
`;

const Menu = styled.ul`
  width: 100%;
  max-width: ${palette.container.maxWidth};
  list-style-type: none;
  display: flex;
  justify-content: center;
`;

const Item = styled.li`
  padding: 20px;
  ${({ selected }) => selected ? `background-color: ${palette.colors.darkerBackground};` : ''}
  & * {
    color: ${palette.colors.text};
  }
`;

const Nav: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <NavWrapper>
      <Menu>
        <Item selected={pathname === '/'}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Item>
        <Item selected={pathname === '/news'}>
          <Link href="/news">
            <a>News</a>
          </Link>
        </Item>
        <Item selected={pathname === '/videos'}>
          <Link href="/videos">
            <a>Videos</a>
          </Link>
        </Item>
        <Item selected={pathname === '/about'}>
          <Link href="/about">
            <a>About us</a>
          </Link>
        </Item>
      </Menu>
    </NavWrapper>
  );
};

export default Nav;
