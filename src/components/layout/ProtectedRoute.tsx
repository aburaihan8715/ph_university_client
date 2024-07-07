import { ReactNode } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { getCurrentToken } from '../../redux/features/auth/authSlice';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(getCurrentToken);
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
