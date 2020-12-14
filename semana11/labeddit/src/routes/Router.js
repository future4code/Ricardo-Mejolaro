import { Switch, Route } from 'react-router-dom';

/*Páginas*/
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import FeedPage from '../pages/FeedPage';
import PostPage from '../pages/PostPage';
import ErrorPage from '../pages/ErrorPage';

export default function Router() {
    return (
        <Switch>
            <Route exact path={['/', '/feed']}>
                <FeedPage />
            </Route>
            <Route exact path={'/login'}>
                <LoginPage />
            </Route>
            <Route exact path={'/signup'}>
                <SignupPage />
            </Route>
            <Route exact path={'/post/:id'}>
                <PostPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}