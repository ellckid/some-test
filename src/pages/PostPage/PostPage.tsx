// libraries
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
// classes
import classes from './PostPage.module.css'
// service
import { PostInfo } from '../../types/types'
import { useActions } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'
// components
import { Link } from 'react-router-dom'
import LikeButtons from '../../components/LikeButton/LikeButtons'

function PostPage() {
    const { id } = useParams()
    const { smallPosts, bigPost } = useTypedSelector(state => state.posts)
    const { getPostById } = useActions()
    const [post, setPost] = useState<PostInfo>(bigPost)

    function getPost() {
        let temp: PostInfo[] = []
        temp = temp.concat(smallPosts, bigPost)
        const temp2 = temp.find(el => el.id == Number(id))
        if (temp2) {
            setPost(temp2)
        }
        console.log(temp2)
        console.log(bigPost)
    }

    useEffect(() => {
        getPost()
        if (post?.id == 0) {
            getPostById(Number(id))
            setPost(bigPost)
        }
    }, [bigPost])

    return (
        <main className={classes.postPage} >
            <nav className={classes.postPage_nav}>
                <Link to='/some-test/' className={classes.postPage_link}><img className={classes.link_img} src='/some-test/keyboard_backspace.svg' alt='back arrow'></img>Вернуться к статьям</Link>
                <div className={classes.likeBtn_container}>
                    <LikeButtons postId={post?.id}></LikeButtons>
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

export default PostPage

