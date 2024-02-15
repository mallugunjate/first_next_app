'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Navbar.module.css'; // Assuming you have a CSS module for styling

const Navbar = () => {
  const pathname = usePathname();
  const active  = pathname === '/' ? 'active' : '';
  return (
    <header className={styles.header}>
    <h1></h1>
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">
            <Image
                src="/logo.png"
                width={136}
                height={10}
                alt="State Creation"
            />
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/StateCreation">
            <Image
                src="/state-creation.png"
                width={136}
                height={12}
                alt="State Creation"
            />
          </Link>
        </li>
        <li className={`${styles.navItem} ${pathname === '/products' ? 'active' : ''}`}>
          <Link href="/products">
            PRODUCTS
          </Link>
        </li>
        <li className={`${styles.navItem} ${pathname === '/ordering' ? 'active' : ''}`}>
          <Link href="/ordering">
            ORDERING
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/education">
            EDUCATION
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/news">
            NEWS
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            ABOUT
          </Link>
        </li>
        <li className={styles.navItem}>
            <input type="search" placeholder="Search" name="q" onChange={(e) => {handleGlobalSearch(e.target.value);}}/>
        </li>
        <li className={styles.navItem}>
            <FontAwesomeIcon icon={faSearch} className={styles.globalsearchIcon}/>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;
