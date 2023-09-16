// libraries
import { useNavigate } from 'react-router-dom'
// classes
import classes from './BigPost.module.css'
import LikeButtons from '../LikeButton/LikeButtons'
import { PostInfo } from '../../types/types'


type BigPostProps = {
    post: PostInfo
    imgUrl: string
}

function BigPost(props: BigPostProps) {
    const router = useNavigate()
    return (
        <article className={classes.post}>
            <a className={classes.post__link} onClick={() => router('/some-test/' + props.post.id)} ><img className={classes.post__img} src={props.imgUrl}></img></a>
            <div className={classes.post__container}>
                <div className={classes.post__btn_container}>
                    <h3 className={classes.post__h3}>{props.post.title}</h3>
                    <div className={classes.post__likes_dislikes}>
                        <LikeButtons postId={props.post.id} ></LikeButtons>
                    </div>
                </div>
                <h4 className={classes.post__h4}>{props.post.body}</h4>
                <a className={classes.post__link + ' ' + classes.post__btn} onClick={() => router('/some-test/' + props.post.id)}>Читать далее</a>

            </div>

        </article >
    )
}

export default BigPost
