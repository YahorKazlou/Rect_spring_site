import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AuthProtectedRoute from './components/common/AuthProtectedRoute';
import GuestProtectedRoute from './components/common/GuestProtectedRoute';

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
        element: (
            <GuestProtectedRoute>
                <LoginPage />
            </GuestProtectedRoute>
        ),
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
