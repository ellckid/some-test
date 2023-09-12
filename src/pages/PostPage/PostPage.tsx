// libraries
import { useParams } from 'react-router-dom'
import _ from 'lodash'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
// classes
import classes from './PostPage.module.css'
// service
import { PostInfo } from '../../types/types'
import PostService from '../../services/PostService'
// components
import { Link } from 'react-router-dom'
import LikeButton from '../../components/LikeButton/LikeButton'


function PostPage() {
    const [post, setPost] = useState<PostInfo>()
    const id = useParams()

    async function getPost(id: {}) {
        let param
        _.forEach(id, (el) => {
            param = el
        })
        const res = await PostService.getPost(param)
        setPost(res)
    }

    useEffect(() => {
        getPost(id)
    }, [])

    return (
        <main className={classes.postPage} >
            <nav className={classes.postPage_nav}>
                <Link to='/some-test/' className={classes.postPage_link}><img className={classes.link_img} src='/some-test/keyboard_backspace.svg' alt='back arrow'></img>Вернуться к статьям</Link>
                <div className={classes.likeBtn_container}>
                    <LikeButton isLike={true} likes={100}></LikeButton>
                    <LikeButton isLike={false} likes={50}></LikeButton>
                </div>
            </nav>
            <h1 className={classes.postPage_h1}>{post?.title}</h1>
            <section className={classes.postPage_section}>
                <img className={classes.section_img} src="https://placehold.co/1140x600/orange/white" alt="post image" />
                <h4 className={classes.section_h4}>{post?.body}</h4>
            </section>
        </main >
    )
}

export default observer(PostPage)

