import styles from './About.module.css';
import { Rating } from '@mui/material';

const Comment = ({ img, name, date, text, value }) => {
    return (
        <div className={styles.comment_container}>
            <div className={styles.comment}>
                <div className={styles.header}>
                    <div className={styles.user}>
                        <img
                            src={img}
                            alt="user-img"
                            className={styles.user_img}
                        />
                        <p className={styles.name}>{name}</p>
                    </div>
                    <div className={styles.date}>{date}</div>
                </div>
                <div className={styles.text}>{text}</div>
                <div className={styles.rating}>
                <Rating name="read-only" value={value} readOnly size="small"/>
                </div>
            </div>
        </div>
    );
};

export default Comment;
