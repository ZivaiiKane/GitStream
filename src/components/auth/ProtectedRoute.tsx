import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  const user = document.cookie;
  if (user) {
    return true;
  } else {
    return false;
  }
};

export default function ProtectedRoute(props: {}) {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to={'/login'} />;
}
