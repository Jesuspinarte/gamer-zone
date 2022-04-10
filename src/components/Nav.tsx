import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home{pathname === '/' && ' <--'}</a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a>News{pathname === '/news' && ' <--'}</a>
          </Link>
        </li>
        <li>
          <Link href="/videos">
            <a>Videos{pathname === '/videos' && ' <--'}</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About us{pathname === '/about' && ' <--'}</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
