// libraries
import { useNavigate } from 'react-router-dom'
// classes
import classes from './BigPost.module.css'
import LikeButtons from '../LikeButton/LikeButtons'


type BigPostProps = {
    id: number
    title: string
    likes: number
    dislikes: number
    isClicked: 'like' | 'dislike' | false
    description: string
    imgUrl: string
}

function BigPost(props: BigPostProps) {
    const router = useNavigate()
    return (
        <article className={classes.post}>
            <a className={classes.post__link} onClick={() => router('/some-test/' + props.id)} ><img className={classes.post__img} src={props.imgUrl}></img></a>
            <div className={classes.post__container}>
                <div className={classes.post__btn_container}>
                    <h3 className={classes.post__h3}>{props.title}</h3>
                    <div className={classes.post__likes_dislikes}>
                        <LikeButtons likes={props.likes} disLikes={props.dislikes} isClicked={props.isClicked}></LikeButtons>
                    </div>
                </div>
                <h4 className={classes.post__h4}>{props.description}</h4>
                <a className={classes.post__link + ' ' + classes.post__btn} onClick={() => router('/some-test/' + props.id)}>Читать далее</a>

            </div>

        </article >
    )
}

export default BigPost
