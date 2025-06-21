import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'src/redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(logout());

  return (
    <div className={css.wrapper}>
      <p>Welcome, {currentUser.name}</p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
