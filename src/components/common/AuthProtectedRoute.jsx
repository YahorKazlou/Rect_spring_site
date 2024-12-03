import { Navigate } from 'react-router';
import useStorageValue from '../../hooks/useStorageValues';

const AuthProtectedRoute = ({ children }) => {
    const token = useStorageValue('authToken');

    if (token) {
        return children;
    } else {
        return <Navigate to="/login" replace />;
    }
};

export default AuthProtectedRoute;
