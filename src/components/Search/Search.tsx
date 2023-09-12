// libraries
import { useEffect, useMemo, useState } from 'react'
// classes
import classes from './Search.module.css'

type searchProps = {
    searchFunc: Function
}
function Search(props: searchProps) {
    const [searchString, setSearchString] = useState('')
    useEffect(() => {
        props.searchFunc(searchString)
    }, [searchString])
    return (
        <form className={classes.search} onSubmit={(e) => {
            e.preventDefault()
        }}>
            <img className={classes.search_icon} src='/some-test/isearch.svg'></img>
            <input className={classes.search__input} type='search' placeholder='Поиск по названию статьи' value={searchString} onChange={e => {
                setSearchString(e.target.value)
            }}></input>
        </form>
    )
}

export default Search
