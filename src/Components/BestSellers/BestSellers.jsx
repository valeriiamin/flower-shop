import styles from './BestSellers.module.css';
import data from '../../data/dataCard';
import Card from '../Card/Card';

const BestSellers = () => {
    const bestCard = data.slice(0, 4);
    return (
        <div className={styles.bestsellers}>
            <h3 className={styles.title}>Best selers</h3>
            <div className={styles.card}>
                {bestCard.map((item) => {
                    return (
                        <Card
                            img={item.img}
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default BestSellers;
