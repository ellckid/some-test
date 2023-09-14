import { render, screen } from '@testing-library/react'
import Post from '../Post/Post'
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';
import BigPost from '../BigPost/BigPost';


describe('тесты для постов', () => {
    test('проверка текста ', () => {
        render(
            <BrowserRouter>
                <Post id={1} title={"Интересные факты"} likes={100} dislikes={100} isClicked={'like'} imgUrl='' />
                <BigPost id={1} title={"Интересные факты"} description='Description' likes={100} dislikes={100} isClicked={'like'} imgUrl=''></BigPost>
            </BrowserRouter >
        )
        expect(screen.getAllByText('Интересные факты')).toBeTruthy()
        expect(screen.getAllByText('Description')).toBeTruthy()
        expect(screen.getAllByAltText('Article image')).toBeTruthy()
    })
})
