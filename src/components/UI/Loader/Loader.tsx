import classes from './Loader.module.css'

const Loader = function () {
    return (
        <div className={classes.lds_container}>
            <div className={classes.lds_ring}><div></div><div></div><div></div><div></div></div>
        </div>

    )
}

export default Loader;
