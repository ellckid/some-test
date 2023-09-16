import { render, screen } from '@testing-library/react'
import Post from '../Post/Post'
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';
import BigPost from '../BigPost/BigPost';
import { PostInfo } from '../../types/types';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const testPost: PostInfo = {
    userId: 1,
    id: 1,
    title: "first post",
    body: "description for first post"
}

describe('тесты для постов', () => {
    test('проверка текста и альт ', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Post post={testPost} imgUrl='' />
                    <BigPost post={testPost} imgUrl=''></BigPost>
                </Provider >

            </BrowserRouter >
        )
        expect(screen.getAllByText('first post')).toBeTruthy()
        expect(screen.getAllByText('description for first post')).toBeTruthy()
        expect(screen.getAllByAltText('Article image')).toBeTruthy()
    })
})
