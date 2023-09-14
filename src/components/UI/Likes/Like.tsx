import classes from './Like.module.css'

function Like() {
    return (
        <svg className={classes.like_img} width="32" height="33" viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg">
            <g id="ThumbUpAlt">
                <path className={classes.like_img} id="Vector" d="M2.66667 27.1667H5.33333C6.06667 27.1667 6.66667 26.5667 6.66667 25.8334V13.8334C6.66667 13.1 6.06667 12.5 5.33333 12.5H2.66667V27.1667ZM29.1067 17.6734C29.2533 17.34 29.3333 16.98 29.3333 16.6067V15.1667C29.3333 13.7 28.1333 12.5 26.6667 12.5H19.3333L20.56 6.30002C20.6267 6.00669 20.5867 5.68669 20.4533 5.42002C20.1467 4.82002 19.76 4.27335 19.28 3.79335L18.6667 3.16669L10.12 11.7134C9.61333 12.22 9.33333 12.9 9.33333 13.6067V24.06C9.33333 25.7667 10.7333 27.1667 12.4533 27.1667H23.2667C24.2 27.1667 25.08 26.6734 25.56 25.8734L29.1067 17.6734Z" />
            </g>
        </svg>
    )
}
export default Like
