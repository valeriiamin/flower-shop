import data from '../../data/dataPosts';
import Post from './Post';
import s from './Blog.module.css';

const Blog = () => {
    const posts = data.slice(0, 3);
    return (
            <div className={s.blog}>
                <h3 className={s.title}>Latest posts</h3>
                <div className={s.posts}>
                    {posts.map((item) => {
                        return (
                            <Post
                                key={item.id}
                                user_img={item.user_img}
                                name={item.name}
                                date={item.date}
                                img={item.img}
                                subtitle={item.title}
                                text={item.text}
                                likes={item.likes}
                                views={item.views}
                            />
                        );
                    })}
                </div>
            </div>
    );
};



export default Blog;
