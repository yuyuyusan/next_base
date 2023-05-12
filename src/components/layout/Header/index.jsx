import styles from './Header.module.css';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import HeaderMenu from 'src/components/ui/HeaderMenu';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const Header = () => {
  return (
    <header className={styles.wrap}>
      <div className={styles.container}>
        <figure className={styles.logo}>
          {/* <Image src="/logo_company.png" alt="icon" width={100} height={100} /> */}
        </figure>
        <p className={`${styles.title} ${roboto.className}`}>
          company
        </p>
      </div>
      <HeaderMenu />
    </header>
  );
};

export default Header;
