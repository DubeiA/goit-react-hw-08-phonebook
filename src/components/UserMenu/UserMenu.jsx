import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperation';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
};