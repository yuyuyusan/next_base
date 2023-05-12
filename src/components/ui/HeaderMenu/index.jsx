import Link from 'next/link';
import styles from './HeaderMenu.module.css';
import Image from 'next/image';
import { Raleway } from 'next/font/google';
import { useState,useCallback } from 'react';

const raleway = Raleway({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const NAV_ITEMS = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
  { href: '/news', label: 'NEWS' },
  { href: '/works', label: 'WORKS' },
];

const HeaderMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className={styles.content}>
      <nav
        className={`${styles['gnav']} 
			${openMenu ? styles['openNav'] : styles['closeNav']}`}
      >
        <ul className={styles.gnav__list}>
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.label} className={styles.gnav__listItem}>
                <Link href={item.href} className={styles.gnav__listItemLink}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button onClick={handleMenuOpen} type="button" className={`${styles['menu']} 
			${openMenu ? styles['open'] : styles['close']}`}>
        <div className={styles.menuBox}>
          <span className={styles.menuTop}></span>
          <span className={styles.menuCenter}></span>
          <span className={styles.menuBottom}></span>
          <p className={`${styles.menuText} ${raleway.className}`}>Menu</p>
        </div>
      </button>

      <div className={styles.cta}>
        <Link href="/contact">
          <span>
            <Image
              src="/icon_mail.png"
              alt="icon"
              width={160}
              height={100}
            />
          </span>
          <p className={`${styles.ctaText} ${raleway.className}`}>Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default HeaderMenu;
