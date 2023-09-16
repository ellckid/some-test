// libraries
import { useNavigate } from 'react-router-dom'
// types
import { PostInfo } from '../../types/types'
// classes
import classes from './Post.module.css'
import LikeButtons from '../LikeButton/LikeButtons'

type PostProps = {
    post: PostInfo
    imgUrl: string
}

function Post(props: PostProps) {
    const router = useNavigate()

    return (
        <article className={classes.post}>
            <a className={classes.post__link} onClick={() => router('/some-test/' + props.post.id)} ><img className={classes.post__img} src={props.imgUrl} alt='Article image'></img></a>
            <div className={classes.post__container}>
                <h3 className={classes.post__h3}>{props.post.title}</h3>
                <div className={classes.post__btn_container}>
                    <LikeButtons postId={props.post.id}></LikeButtons>
                    <a className={classes.post__link + ' ' + classes.post__btn} onClick={() => router('/some-test/' + props.post.id)}>Читать далее</a>
                </div>
            </div>

        </article >
    )
}

export default Post
