import styles from './Blog.module.css';
import heart from '../../assets/blog/heart.png';
import view from '../../assets/blog/views.png';
import { Link } from 'react-router-dom';

const Post = ({ user_img, name, date, img, subtitle, text, likes, views }) => {
    return (
        <div className={styles.post}>
            <div className={styles.post_header}>
                <div className={styles.user}>
                    <img
                        src={user_img}
                        alt="user-img"
                        className={styles.user_img}
                    />
                    <p className={styles.name}>{name}</p>
                </div>
                <div className={styles.date}>{date}</div>
            </div>
            <img src={img} alt="img" className={styles.post_img}/>
            <h6 className={styles.subtitle}>{subtitle}</h6>
            <p className={styles.text}>{text}</p>
            <div className={styles.footer}>
                <div className={styles.likes}>
                    <img src={heart} alt="heart" className={styles.icons}/>
                    <div className={styles.views}>{likes}</div>
                    <img src={view} alt="views" className={styles.icons}/>
                    <div className={styles.views}>{views}</div>
                </div>
                <Link to="blog" className={styles.link}>Read more</Link>
            </div>
        </div>
    );
};

export default Post;
