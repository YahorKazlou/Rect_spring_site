import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

const AuthProtectedRoute = ({ children }) => {
    const user = useSelector((state) => state.user.userData);

    if (!user?.login) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default AuthProtectedRoute;
