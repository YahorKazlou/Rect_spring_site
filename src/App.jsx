import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AuthProtectedRoute from './components/common/AuthProtectedRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <AuthProtectedRoute>
                <HomePage />
            </AuthProtectedRoute>
        ),
    },
    {
        path: 'login',
        element: <LoginPage />,
    },
    {
        path: 'signup',
        element: <SignupPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
