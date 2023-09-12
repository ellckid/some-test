import MainPage from "../pages/MainPage/MainPage";
import PostPage from "../pages/PostPage/PostPage";

export const publicRoutes = [
    { path: '/some-test/', component: MainPage, exact: true },
    { path: '/some-test/:id', component: PostPage, exact: true }
]
