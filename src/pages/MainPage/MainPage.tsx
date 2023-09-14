// libraries
import { useContext, useEffect, useState } from 'react'
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
    const [bigPost, setBigPost] = useState<PostInfo>()
    const [postList, setPostList] = useState<PostInfo[]>([])

    function setPosts(posts: PostInfo[] | undefined) {
        if (posts) {
            _.forEach(posts, (el) => {
                el.likes = getRandomLikes()
                el.dislikes = getRandomLikes()
                el.isCliked = false
            })
            setBigPost(posts.filter((el) => posts.indexOf(el) == 0)[0])
            console.log(bigPost?.likes)
            console.log(bigPost?.dislikes)
            setPostList(posts.filter((el) => posts.indexOf(el) != 0))

            store.setPosts(posts)
        }
    }

    async function getPosts() {
        try {
            const response = await store.getPostList()
            setPosts(response)

        } catch (e) {
            console.log(e)
        }
    }

    async function searchByTitle(searchString: string) {
        try {
            const response = await store.getPostByTitle(searchString)
            if (searchString.trim()) {
                setPosts(response)
            } else {
                getPosts()
            }
        } catch (e) {
            console.log(e)
        }
    }

    function getRandomLikes() {
        return Math.floor(Math.random() * 50 + 1)
    }


    useEffect(() => {
        getPosts()
    }, [])

    return (
        <main className={classes.mainPage} >
            <div className={classes.headings_container}>
                <h1 className={classes.mainPage_h1}>Блог</h1>
                <h2 className={classes.mainPage_h2}>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</h2>
            </div>
            <Search searchFunc={searchByTitle} ></Search>

            {bigPost && <BigPost id={bigPost.id} title={bigPost.title} likes={bigPost.likes} dislikes={bigPost.dislikes} description={bigPost.body} isClicked={bigPost.isCliked} imgUrl={'https://placehold.co/1140x600/orange/white'}></BigPost>}
            <section className={classes.mainPage_posts}>
                {
                    _.map(postList, (item, id) => (
                        <Post key={id} id={item.id} title={item.title} likes={item.likes} dislikes={item.dislikes} isClicked={item.isCliked} imgUrl={'https://placehold.co/600x400/orange/white'} ></Post>
                    ))
                }
            </section>
        </main >
    )
}

export default observer(MainPage)

