import { Navigate } from 'react-router';

const AuthProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('authToken')
    if (token) {
        return children;
    } else {
        return <Navigate to="/login" replace />;
    }
};

export default AuthProtectedRoute;
