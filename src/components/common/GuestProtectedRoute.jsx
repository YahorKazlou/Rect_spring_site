import { Navigate } from 'react-router';
import useStorageValue from '../../hooks/useStorageValues';

const GuestProtectedRoute = ({ children }) => {
    const token = useStorageValue('accessToken');

    if (token) {
        return <Navigate to="/" replace />;
    } else {
        return children;
    }
};

export default GuestProtectedRoute;
