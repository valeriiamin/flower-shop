import BestSellers from '../BestSellers/BestSellers';
import Blog from '../Blog/Blog';
import data from '../../data/dataHome';
import styles from './Home.module.css';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <main>
            <div className={styles.main_container}>
                    <div className={styles.home}>
                        <div className={styles.home_content}>
                            <h1 className={styles.title}>
                                Flowers, 🌻 <br />
                                what the world <br /> needs
                            </h1>
                            <p className={styles.text}>
                                Browse between hounders of flowers
                            </p>
                            <button className={styles.home_button}>
                                Browse
                            </button>
                        </div>
                        <div className={styles.home_images}>
                            {data.map((d) => {
                                return (
                                    <img src={d.src} key={d.id} alt={d.text} />
                                );
                            })}
                        </div>
                    </div>
                <BestSellers />
                <Blog />
                    <div className={styles.about}>
                        <h3 className={styles.subtitle}>Comments</h3>
                        <Slider />
                    </div>
            </div>
        </main>
    );
};

export default Home;
