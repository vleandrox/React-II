import styles from './Header.module.css'
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import productsActions from '../store/actions/products';

const { captureText } = productsActions

function Header() {
  const text = useRef();
  const dispatch = useDispatch();
  const setText = () => {
    dispatch(captureText({ text: text.current.value }));
  }

  return (
    <header>
      <div className={styles["header-container"]}>
        <Link to="/" className={styles["header-logo"]}>
          <img className={styles["header-logo-img"]} src="../tiendamialogo.svg" width="218" alt="Logo store" />
        </Link>
        <div className={styles["header-form"]}>
          <form>
            <input
              className={styles["header-input"]}
              type="text"
              placeholder="Search"
              id="search"
              ref={text}
              onChange={setText}
            />
          </form>
        </div>
        <div className={styles["header-social"]}>
          <ul>
            <li id="facebook" className={styles["header-li"]}>
              <a className={styles["header-a"]} href="https://facebook.com">
                <img className={styles["header-social-img"]} src="../facebook.png" />
              </a>
            </li>
            <li id="instagram" className={styles["header-li"]} >
              <a className={styles["header-a"]} href="https://instagram.com">
                <img className={styles["header-social-img"]} src="../instagram.png" />
              </a>
            </li>
            <li id="cart" className={styles["header-li"]}>
              <Link className={styles["header-a"]} to="/cart">
                <img className={styles["header-social-img"]} src="../shopping-cart.png" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <NavBar></NavBar>
    </header>
  );
}

export default Header