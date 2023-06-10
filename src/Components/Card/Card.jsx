// import data from '../../data/dataCard'
import AddToCart from '../AddToCart/AddToCart';
import styles from './Card.module.css';

const Card = ({ img, name, price }) => {
    return (
        <div className={styles.card}>
            <img src={img} alt={name} className={styles.card_img}/>
            <h4 className={styles.name}>{name}</h4>
            <div className={styles.prices}>
                <p className={styles.price}>{price}$</p>
                <AddToCart/>
            </div>
        </div>
    );
};

export default Card;
