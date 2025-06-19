import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function RestrictedRoute() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? <Outlet /> : <Navigate to="/contacts" />;
}