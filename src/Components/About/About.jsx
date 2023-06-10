import styles from './About.module.css';
// import Comment from './Comment';


const About = () => {
    return (
        <div className={styles.comments_container}>
            {/* {comments.map((item) => {
                return (
                    <Comment
                        key={item.id}
                        img={item.user_img}
                        name={item.name}
                        date={item.date}
                        text={item.text}
                    />
                );
            })} */}
        </div>
    );
};

export default About;
