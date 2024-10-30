import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

const GuestProtectedRoute = ({ children }) => {
    const user = useSelector((state) => state.user);

    if (user?.login) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default GuestProtectedRoute;
