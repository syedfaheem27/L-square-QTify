import Button from './Button'
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css'
import SearchBar from './SearchBar';

function Navbar() {
  return <nav className={styles.navbar}>
    <Logo />
    <SearchBar />
    <Button />
  </nav>;
}
export default Navbar