import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider/AuthProvider';
import logo from '../../assets/logo.svg';
import styles from './layout.module.scss';

export default function Layout() {
  const { user, signOut } = useContext(AuthContext) ?? {};
  const navigate = useNavigate();
  const logoutHandler = () => {
    signOut(() => navigate('/'));
  };
  const User = user?.id ? (
    <div className={styles.user}>
      <div className={styles.email}>{user?.email}</div>
      <div className={styles.logout} onClick={logoutHandler}>
        Logout
      </div>
    </div>
  ) : (
    ''
  );
  return (
    <>
      <header className={styles.header}>
        <Link to='/'>
          <img src={logo} className={styles.logo} alt='logo' />
        </Link>
        {User}
      </header>
      <div className={styles.layout}>
        <Outlet />
      </div>
    </>
  );
}
