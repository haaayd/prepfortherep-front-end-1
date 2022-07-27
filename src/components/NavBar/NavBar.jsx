import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className={styles.navbar}>
          <div className={styles.navv}>
            <p className={styles.wel}>Welcome, {user.name}</p>
            <button className={styles.nav}><Link to="/profiles">Profiles</Link></button>
            <button className={styles.nav}><Link to="/">Cards</Link></button>
            <button className={styles.nav}><Link to="/add">Add Card</Link></button>
            <button className={styles.nav}><Link to="" onClick={handleLogout}>LOG OUT</Link></button>
            <button className={styles.nav}><Link to="/changePassword">Change Password</Link></button>
          </div>
        </nav>
      :
        <nav>
          <ul>
            <li className={styles.navv}><Link to="/login">Log In</Link></li>
            <li className={styles.navv}><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
