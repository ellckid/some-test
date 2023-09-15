// libraries
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
// classes
import classes from './PostPage.module.css'
// service
import { PostInfo } from '../../types/types'
import PostService from '../../services/PostService'
// components
import { Link } from 'react-router-dom'
import LikeButtons from '../../components/LikeButton/LikeButtons'


function PostPage() {
    const [post, setPost] = useState<PostInfo>()
    const params = useParams<string>()

    async function getPost(param: object) {
        const res = await PostService.getPost(param.toString())
        setPost(res)
    }

    useEffect(() => {
        getPost(params)
    })

    return (
        <main className={classes.postPage} >
            <nav className={classes.postPage_nav}>
                <Link to='/some-test/' className={classes.postPage_link}><img className={classes.link_img} src='/some-test/keyboard_backspace.svg' alt='back arrow'></img>Вернуться к статьям</Link>
                <div className={classes.likeBtn_container}>
                    <LikeButtons likes={100} disLikes={50} isClicked={'dislike'}></LikeButtons>
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

