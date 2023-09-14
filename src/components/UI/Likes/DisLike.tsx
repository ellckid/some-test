import classes from './Like.module.css'

function DisLike() {
    return (
        <svg className={classes.like_img} width="32" height="33" viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg">
            <g id="ThumbDownAlt">
                <path className={classes.like_img} id="Vector" d="M2.66668 5.83331H5.33334C6.06668 5.83331 6.66668 6.43331 6.66668 7.16665V19.1666C6.66668 19.9 6.06668 20.5 5.33334 20.5H2.66668V5.83331ZM29.1067 15.3266C29.2533 15.66 29.3333 16.02 29.3333 16.3933V17.8333C29.3333 19.3 28.1333 20.5 26.6667 20.5H19.3333L20.56 26.7C20.6267 26.9933 20.5867 27.3133 20.4533 27.58C20.1467 28.18 19.76 28.7266 19.28 29.2066L18.6667 29.8333L10.12 21.2866C9.61334 20.78 9.33334 20.1 9.33334 19.3933V8.95331C9.33334 7.23331 10.7333 5.83331 12.4533 5.83331H23.2533C24.2 5.83331 25.0667 6.32665 25.5467 7.12665L29.1067 15.3266Z" />
            </g>
        </svg>
    )
}
export default DisLike
