// libraries
import { useContext, useRef, useState } from 'react'
import { useLikeBtn } from '../../hooks/useLikeBtn'
// service
import { context } from '../../main'
// classes
import classes from './LikeButton.module.css'


type LikeButtonProps = {
    id: number | undefined
    likes: number | undefined
    isLike: boolean
    isClicked: boolean | undefined
}
function LikeButton(props: LikeButtonProps) {
    const { store } = useContext(context)
    const [likes, setLikes] = useState(props.likes)
    const [isClicked, setIsClicked] = useState(false);
    const like = useRef<HTMLInputElement>(null)
    if (props.isLike) {
        return (
            <span className={classes.like_btn} onClick={() => {
                useLikeBtn(
                    likes,
                    like?.current,
                    setLikes,
                    isClicked,
                    setIsClicked,
                    classes.fillGreen
                )

            }} ref={like}>
                <svg className={classes.like_img} width="32" height="33" viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg">
                    <g id="ThumbUpAlt">
                        <path id="like" d="M2.66667 27.1667H5.33333C6.06667 27.1667 6.66667 26.5667 6.66667 25.8334V13.8334C6.66667 13.1 6.06667 12.5 5.33333 12.5H2.66667V27.1667ZM29.1067 17.6734C29.2533 17.34 29.3333 16.98 29.3333 16.6067V15.1667C29.3333 13.7 28.1333 12.5 26.6667 12.5H19.3333L20.56 6.30002C20.6267 6.00669 20.5867 5.68669 20.4533 5.42002C20.1467 4.82002 19.76 4.27335 19.28 3.79335L18.6667 3.16669L10.12 11.7134C9.61333 12.22 9.33333 12.9 9.33333 13.6067V24.06C9.33333 25.7667 10.7333 27.1667 12.4533 27.1667H23.2667C24.2 27.1667 25.08 26.6734 25.56 25.8734L29.1067 17.6734Z" />
                    </g>
                </svg>{likes}
            </span>
        )
    } else {
        return (
            <span className={classes.like_btn} onClick={() => {
                useLikeBtn(
                    likes,
                    like?.current,
                    setLikes,
                    isClicked,
                    setIsClicked,
                    classes.fillRed
                )
            }} ref={like}>
                <svg className={classes.like_img} width="32" height="33" viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg">
                    <g id="ThumbDownAlt">
                        <path id="Vector" d="M2.66668 5.83331H5.33334C6.06668 5.83331 6.66668 6.43331 6.66668 7.16665V19.1666C6.66668 19.9 6.06668 20.5 5.33334 20.5H2.66668V5.83331ZM29.1067 15.3266C29.2533 15.66 29.3333 16.02 29.3333 16.3933V17.8333C29.3333 19.3 28.1333 20.5 26.6667 20.5H19.3333L20.56 26.7C20.6267 26.9933 20.5867 27.3133 20.4533 27.58C20.1467 28.18 19.76 28.7266 19.28 29.2066L18.6667 29.8333L10.12 21.2866C9.61334 20.78 9.33334 20.1 9.33334 19.3933V8.95331C9.33334 7.23331 10.7333 5.83331 12.4533 5.83331H23.2533C24.2 5.83331 25.0667 6.32665 25.5467 7.12665L29.1067 15.3266Z" />
                    </g>
                </svg>{likes}

            </span>
        )
    }
}
export default LikeButton
