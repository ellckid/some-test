import configureStore from 'redux-mock-store';

// Actions to be tested
import * as PostActions from '../../store/posts/posts.slice';

const mockStore = configureStore();
const store = mockStore();

describe('тесты экшенов для "Поста"', () => {
    beforeEach(() => { store.clearActions() })
    test('тест setPostLikes', () => {
        const result = [{
            postId: 1,
            likes: Number,
            dislikes: Number,
            isClicked: false
        }]

        store.dispatch(PostActions.actions.setPostLikes())
        expect(store.getActions()).toEqual(result)
    })
})
