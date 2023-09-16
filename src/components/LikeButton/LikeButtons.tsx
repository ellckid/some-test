// libraries
import classNames from 'classnames'
// service
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useAction'
// classes
import './LikeButtons.css'
// components
import Like from '../UI/Likes/Like'
import DisLike from '../UI/Likes/DisLike'


type LikeButtonsProps = {
    postId: number | undefined
}
function LikeButtons(props: LikeButtonsProps) {
    const postLikes = useTypedSelector(state => state.posts.postLikes)
    const post = postLikes.find(el => el.postId == props.postId)
    const { setPostStat } = useActions()

    const like_img_class = classNames('like_btn',
        {
            'fillGreen': post?.isCliked === 'like',
        })
    const dislike_img_class = classNames('like_btn',
        {
            'fillRed': post?.isCliked === 'dislike'
        })

    return (
        <div className={'like_dislike_container'}>

            <span className={like_img_class} onClick={() => {
                if (post)
                    setPostStat({ id: post?.postId, type: 'like' })
            }}>
                <Like></Like>
                {post?.likes}
            </span>
            <span className={dislike_img_class} onClick={() => {
                if (post)
                    setPostStat({ id: post?.postId, type: 'dislike' })
            }}>
                <DisLike></DisLike>
                {post?.dislikes}
            </span>
        </div >
    )
}
export default LikeButtons
