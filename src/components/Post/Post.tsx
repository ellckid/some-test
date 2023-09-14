// libraries
import { useNavigate } from 'react-router-dom'
// classes
import classes from './Post.module.css'
import LikeButtons from '../LikeButton/LikeButtons'


type PostProps = {
    id: number
    title: string
    likes: number | undefined
    dislikes: number | undefined
    isClicked: "like" | "dislike" | false
    imgUrl: string
}
function Post(props: PostProps) {
    const router = useNavigate()

    return (
        <article className={classes.post}>
            <a className={classes.post__link} onClick={() => router('/some-test/' + props.id)} ><img className={classes.post__img} src={props.imgUrl} alt='Article image'></img></a>
            <div className={classes.post__container}>
                <h3 className={classes.post__h3}>{props.title}</h3>
                <div className={classes.post__btn_container}>
                    <LikeButtons likes={props.likes} disLikes={props.dislikes} isClicked={props.isClicked}></LikeButtons>
                    <a className={classes.post__link + ' ' + classes.post__btn} onClick={() => router('/some-test/' + props.id)}>Читать далее</a>
                </div>
            </div>

        </article >
    )
}

export default Post
