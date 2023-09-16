// libraries
import { useCallback, useState } from 'react'
// classes
import classes from './Search.module.css'
// service
import { useActions } from '../../hooks/useAction'
//components
import SearchIcon from '../UI/SearchIcon/SearchIcon'

function Search() {
    const [searchString, setSearchString] = useState('')
    const { getPostByTitle } = useActions()

    const handleSubmit = useCallback(() => {
        getPostByTitle(searchString)
    }, [searchString])

    return (
        <form className={classes.search} onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
        }}>
            <SearchIcon></SearchIcon>
            <input className={classes.search__input} type='search' placeholder='Поиск по названию статьи' onChange={e => {
                setSearchString(e.target.value)
            }}></input>
        </form >
    )
}

export default Search
