import { NavLink, Link } from 'react-router-dom';
import user from '../../assets/header/user.png';
import basket from '../../assets/header/basket.png';
import styles from './Header.module.css';

const Header = ({ data }) => {
    return (
        <header>
            <div className={styles.header_container}>
                <Link to="." className={styles.logo}>
                    <span>Flower</span> Shop
                </Link>
                <div className={styles.nav}>
                    {data.map((d) => (
                        <NavLink 
                        key={d.id} 
                        to={d.path} 
                        style={({isActive}) => {
                            return {color: isActive ? '#ff8f52' : '#000'}
                        }}>{d.text}</NavLink>
                    ))}
                </div>
                <div className={styles.icons}>
                    <Link to="login">
                        <img src={user} alt="user" />
                    </Link>
                    <Link to="basket">
                        <img src={basket} alt="basket" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
