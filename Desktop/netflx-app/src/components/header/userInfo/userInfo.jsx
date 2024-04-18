import styles from './userInfo.module.css'
import users from "../../../data"
import { Link } from 'react-router-dom'
import { memo } from 'react'
const UserSettings = () => {
    const AllUsers = users()
    return (
        <div className={styles.settings}>
            <div className={styles.userList}>
                {
                    AllUsers.map((e) => {
                        return (
                            <Link to={`/home`} style={{ textDecoration: "none" }} key={e.user_id} className={styles.link}>
                                <div className={styles.userData}>
                                    <img src={e.user_img} alt={e.user_name} style={{ width: "20px" }} />
                                    <p>{e.user_name} {e.user_lastname}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <Link className={styles.link}>Setting 1</Link>
            <Link className={styles.link}>Setting 2</Link>
        </div>
    )

}

export default memo(UserSettings)