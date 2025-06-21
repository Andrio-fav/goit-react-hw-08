import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <h1>Contacts Manager</h1>
      {!isLoggedIn ? (
        <p>
          Щоб розпочати, будь ласка,&nbsp;
          <Link to="/register">зареєструйтесь</Link> або&nbsp;
          <Link to="/login">увійдіть</Link>.
        </p>
      ) : (
        <p>
          Ви вже увійшли. Перейдіть до <Link to="/contacts">контактів</Link>.
        </p>
      )}
    </div>
  );
}
