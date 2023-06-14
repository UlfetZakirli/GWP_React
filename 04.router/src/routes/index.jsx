
import App from './../App';
import { About } from './../pages/About';
import Contact from './../pages/Contact';
import Blog from './../pages/Blog';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from './../pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
        ]
    },

])