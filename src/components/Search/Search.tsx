// libraries
import { useCallback, useState } from 'react'
import { debounce } from 'lodash'
// classes
import classes from './Search.module.css'
import SearchIcon from '../UI/SearchIcon/SearchIcon'

type searchProps = {
    searchFunc: Function
}

function Search(props: searchProps) {
    const [searchString, setSearchString] = useState('')
    useCallback(() => {
        debounce(props.searchFunc(searchString), 250) // к вопросу о том как не дудосить сервер, прочитал в оф документации реакта, но здесь он скорее всего не нужен
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
