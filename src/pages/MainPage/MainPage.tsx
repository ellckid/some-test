// libraries
import { useContext, useMemo, useState } from 'react'
import _ from 'lodash'
import { observer } from 'mobx-react-lite'
// classes
import classes from './MainPage.module.css'
// service
import { PostInfo } from '../../types/types'
import { context } from '../../main'
// components
import Post from '../../components/Post/Post'
import Search from '../../components/Search/Search'
import BigPost from '../../components/BigPost/BigPost'

function MainPage() {
    const { store } = useContext(context)
    const [bigPost, setBigPost] = useState<PostInfo[] | undefined>([])
    const [postList, setPostList] = useState<PostInfo[] | undefined>([])

    function setPosts(posts: PostInfo[] | undefined) {
        _.forEach(posts, (el) => {
            el.likes = getRandomLikes()
            el.dislikes = getRandomLikes()
            el.isLiked = false
            el.isDisLiked = false
        })
        setBigPost(posts?.filter(el => el.id == 1))
        setPostList(posts?.filter(el => el.id != 1))
        if (posts) {
            store.setPosts(posts)
        }
    }

    async function getPosts() {
        try {
            const response = (await store.getPostList())
            setPosts(response)
        } catch (e) {
            console.log(e)
        }
    }
    async function searchByTitle(searchString: string) {
        try {
            const response = (await store.getPostList())?.filter(el => el.title.match(searchString))
            setPosts(response)
        } catch (e) {
            console.log(e)
        }
        return postList
    }
    function getRandomLikes() {
        return Math.floor(Math.random() * 50 + 1)
    }


    useMemo(() => {
        getPosts()
    }, [])

    return (
        <main className={classes.mainPage} >
            <div className={classes.headings_container}>
                <h1 className={classes.mainPage_h1}>Блог</h1>
                <h2 className={classes.mainPage_h2}>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</h2>
            </div>
            <Search searchFunc={searchByTitle} ></Search>
            {
                _.map(bigPost, (item, key) => (
                    <BigPost key={key} id={item.id} title={item.title} likes={item.likes} dislikes={item.dislikes} description={item.body} isLiked={item.isLiked} isDisLiked={item.isDisLiked} imgUrl={'https://placehold.co/1140x600/orange/white'}></BigPost>
                ))
            }
            <section className={classes.mainPage_posts}>
                {
                    _.map(postList, (item, id) => (
                        <Post key={id} id={item.id} title={item.title} likes={item.likes} dislikes={item.dislikes} isLiked={item.isLiked} isDisLiked={item.isDisLiked} imgUrl={'https://placehold.co/600x400/orange/white'} ></Post>
                    ))
                }
            </section>
        </main >
    )
}

export default observer(MainPage)

