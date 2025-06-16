import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

export default function UserMenu() {
  const curentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(logout());

  return (
    <div className={css.wrapper}>
      <p>Welcome, {curentUser.name}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}