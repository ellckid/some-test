// libraries
import { useState } from 'react'
// classes
import './LikeButtons.css'
import classNames from 'classnames'
import Like from '../UI/Likes/Like'
import DisLike from '../UI/Likes/DisLike'


type LikeButtonsProps = {
    likes: number | undefined
    disLikes: number | undefined
    isClicked: "like" | "dislike" | false
}
function LikeButtons(props: LikeButtonsProps) {
    const [likes, setLikes] = useState(props.likes)
    const [disLikes, setDisLikes] = useState(props.disLikes)
    const [isPressed, setIsPressed] = useState(props.isClicked);

    const like_img_class = classNames('like_btn',
        {
            'fillGreen': isPressed == 'like',
        })
    const dislike_img_class = classNames('like_btn',
        {
            'fillRed': isPressed == 'dislike'
        })


    function handleClick(type: 'like' | 'dislike') {
        if (likes && disLikes) {
            if (isPressed != false) {
                setDisLikes(props.disLikes)
                setLikes(props.likes)
                setIsPressed(false)
            }
            if (isPressed == false) {
                if (type == 'dislike') {
                    setDisLikes(disLikes + 1)
                    setIsPressed('dislike')
                }
                if (type == "like") {
                    setLikes(likes + 1)
                    setIsPressed('like')
                }
            }
        }
    }

    return (
        <div className={'like_dislike_container'}>
            <span className={like_img_class} onClick={() => {
                handleClick('like')
            }}>
                <Like></Like>
                {likes}
            </span>
            <span className={dislike_img_class} onClick={() => {
                handleClick('dislike')
            }}>
                <DisLike></DisLike>
                {disLikes}
            </span>
        </div>
    )
}
export default LikeButtons
