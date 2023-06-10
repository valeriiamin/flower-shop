import { Link } from 'react-router-dom'
import basket from '../../assets/card/basket.png'
import styles from './AddToCart.module.css'

const AddToCart = () => {
  return (
    <div className={styles.links}>
        <img src={basket} alt='basket' className={styles.basket}/>
        <Link to="basket" className={styles.link}>Add to cart</Link>
    </div>
  )
}

export default AddToCart