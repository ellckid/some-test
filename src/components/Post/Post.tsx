// libraries
import { useNavigate } from 'react-router-dom'
// classes
import classes from './Post.module.css'
import LikeButton from '../LikeButton/LikeButton'


type PostProps = {
    id: number
    title: string
    likes: number | undefined
    dislikes: number | undefined
    isLiked: boolean | undefined
    isDisLiked: boolean | undefined
    imgUrl: string
}
function Post(props: PostProps) {
    const router = useNavigate()

    return (
        <article className={classes.post}>
            <a className={classes.post__link} onClick={() => router('/some-test/' + props.id)} ><img className={classes.post__img} src={props.imgUrl}></img></a>
            <div className={classes.post__container}>
                <h3 className={classes.post__h3}>{props.title}</h3>
                <div className={classes.post__btn_container}>
                    <div className={classes.post__likes_dislikes}>
                        <LikeButton isLike={true} likes={props.likes} isClicked={props.isLiked}></LikeButton>
                        <LikeButton isLike={false} likes={props.dislikes} isClicked={props.isDisLiked}></LikeButton>
                    </div>
                    <a className={classes.post__link + ' ' + classes.post__btn} onClick={() => router('/some-test/' + props.id)}>Читать далее</a>
                </div>
            </div>

        </article >
    )
}

export default Post
