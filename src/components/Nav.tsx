import Link from 'next/link';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import palette from '../utils/palette';

const NavWrapper = styled.nav`
  display: flex;
  background-color: ${palette.colors.background};
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.ul`
  width: 100%;
  max-width: ${palette.container.maxWidth};
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex: 1;
`;

const Item = styled.li<{ selected: boolean }>`
  a {
    display: inline-block;
    padding: 20px;
  }

  & * {
    color: ${palette.colors.text};
    font-weight: 400;

    ${({ selected }) =>
      selected &&
      `
        background-color: ${palette.colors.darkerBackground};
        color: ${palette.colors.contrast};
        font-weight: 900;
        position: relative;
        box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);

        &::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          background-color: ${palette.colors.contrast};
          height: 4px;
          width: 100%;
          box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
        }
      `};
  }

  ${({ selected }) =>
    !selected &&
    `&:hover {
    * {
      color: ${palette.colors.textSecondary};
    }
  }`}
`;

const SiteTitle = styled.h1`
  color: ${palette.colors.contrast};
  padding: 10px;
  margin-right: 20px;
  font-size: 30px;

  &::before {
    content: '\\2729';
    margin-right: 10px;
  }
`;

const Nav: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <NavWrapper>
      <Container>
        <SiteTitle>Gamer Zone</SiteTitle>
        <Menu>
          <Item selected={pathname === '/'}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Item>
          <Item selected={pathname === '/about'}>
            <Link href="/about">
              <a>About us</a>
            </Link>
          </Item>
        </Menu>
      </Container>
    </NavWrapper>
  );
};

export default Nav;
