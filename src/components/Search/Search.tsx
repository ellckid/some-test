// libraries
import { useCallback, useState } from 'react'
// classes
import classes from './Search.module.css'
import SearchIcon from '../UI/SearchIcon/SearchIcon'

type searchProps = {
    searchFunc: (arg: string) => void
}

function Search(props: searchProps) {
    const [searchString, setSearchString] = useState('')

    useCallback(() => {
        props.searchFunc(searchString)
    }, [searchString])

    return (
        <form className={classes.search} onSubmit={(e) => {
            e.preventDefault()
            props.searchFunc(searchString)
        }}>
            <SearchIcon></SearchIcon>
            <input className={classes.search__input} type='search' placeholder='Поиск по названию статьи' value={searchString} onChange={e => {
                setSearchString(e.target.value)
            }}></input>
        </form>
    )
}

export default Search
