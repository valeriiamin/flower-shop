import styles from './Footer.module.css';
import data from '../../data/dataHeader';
import dataFooter from '../../data/dataFooter';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className={styles.top}>
                <div className={styles.footer_container}>
                    <div className={styles.logo}>
                        <span>Flower</span> Shop
                    </div>
                    <div className={styles.content}>
                        <div className={styles.column}>
                            <p className={styles.text}>
                                Some random stuff about flower shop and some
                                more info cuz this box had to get fill Some
                                random stuff about flower shop and some more
                                info cuz this box had to get fill Some random
                                stuff about flower shop and some more info cuz
                                this box had to get fill
                            </p>
                        </div>
                        <div className={styles.column}>
                            <h6 className={styles.title}>Links</h6>
                            <div className={styles.nav}>
                                {data.map((d) => (
                                    <NavLink key={d.id} to={d.path}>
                                        {d.text}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        <div className={styles.column}>
                            <h6 className={styles.title}>Links</h6>
                            <div className={styles.nav}>
                                {data.map((d) => (
                                    <NavLink key={d.id} to={d.path}>
                                        {d.text}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        <div className={styles.column}>
                            <h6 className={styles.title}>Contact</h6>
                            <div className={styles.contacts}>
                                {dataFooter.map((item) => {
                                    return (
                                        <div className={styles.contacts_item}>
                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                key={item.id}
                                            />
                                            <div className={styles.subtext}>
                                                {item.text}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>                            
                            
                            {/* <div className={styles.contacts_text}>
                                <div className={styles.subtext}>
                                    26985 Brighton Lane, Lake Forest, CA
                                </div>
                                <div className={styles.subtext}>
                                    <a href="mailto:support@Flowers.com">
                                        support@Flowers.com
                                    </a>
                                </div>
                                <div className={styles.subtext}>
                                    <a href="tel:12365489">+1 236 5489</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
