import { Navigate } from 'react-router';

const GuestProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('authToken')
    if (token) {
        return <Navigate to="/" replace />;
    } else {
        return children;
    }
};

export default GuestProtectedRoute;
