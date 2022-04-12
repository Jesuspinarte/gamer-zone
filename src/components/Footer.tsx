import { useRouter } from 'next/router';

import styled from 'styled-components';
import palette from '../utils/palette';

const FooterWrapper = styled.nav`
  display: flex;
  background-color: ${palette.colors.background};
  justify-content: center;
  padding: 40px;

  * {
    color: ${palette.colors.text};
  }
`;

const Copyright = styled.nav`
  font-size: 10px;
`;

const GitLink = styled.a`
  color: ${palette.colors.contrast};
  font-size: 12px;

  &:hover {
    color: ${palette.colors.textSecondary};
  }
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <Copyright>
      Copyright © 2022 Zona Gamer by{' '}
      <GitLink href="https://github.com/jesuspinarte" target="_blank">
        Jesuspinarte
      </GitLink>
    </Copyright>
  </FooterWrapper>
);

export default Footer;
