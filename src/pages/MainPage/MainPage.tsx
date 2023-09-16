// libraries
import { useEffect } from 'react'
// classes
import classes from './MainPage.module.css'
// services
import { useActions } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'
// components
import Post from '../../components/Post/Post'
import Search from '../../components/Search/Search'
import BigPost from '../../components/BigPost/BigPost'
import Loader from '../../components/UI/Loader/Loader'


function MainPage() {
    const { isLoading, smallPosts, bigPost } = useTypedSelector(state => state.posts)
    const { getPost } = useActions()

    useEffect(() => {
        if (smallPosts.length == 0) {
            getPost()
        }
    }, [])

    return (
        <main className={classes.mainPage} >
            <div className={classes.headings_container}>
                <h1 className={classes.mainPage_h1}>Блог</h1>
                <h2 className={classes.mainPage_h2}>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</h2>
            </div>
            <Search />

            {isLoading && <Loader />}
            {!bigPost && <h3 className={classes.notFound_h3}>По вашему запросу ничего не найдено ( </h3 >}
            {bigPost && <BigPost post={bigPost} imgUrl={'https://placehold.co/1140x600/orange/white'}></BigPost>}

            <section className={classes.mainPage_posts}>
                {
                    smallPosts.map((item) => (
                        <Post key={item.id} post={item} imgUrl={'https://placehold.co/600x400/orange/white'} ></Post>
                    ))
                }
            </section>
        </main >
    )
}

export default MainPage

