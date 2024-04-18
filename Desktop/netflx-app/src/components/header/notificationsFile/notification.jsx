import styles from './notification.module.css'
import { Link } from 'react-router-dom'
import { memo } from 'react'
const Usernotifications = () => {

    return (
        <div className={styles.notifications}>
            <Link className={styles.notification}>notification 1</Link>
            <Link className={styles.notification}>notification 2</Link>
            <Link className={styles.notification}>notification 3</Link>
            <Link className={styles.notification}>notification 4</Link>
        </div>
    )
}
export default memo(Usernotifications)