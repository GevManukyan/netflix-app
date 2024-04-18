import React, { useEffect } from "react"
import getUsers from "../../data"
import styles from "./login.module.css"
import { Link } from "react-router-dom"
import { SetDataToLocalStorage } from "./login.helper"


export default function Login() {
    const AllUsers = getUsers()
    return (
        <div className={styles.loginPage}>
            <div className={styles.container}>
                <h1>Who's watching?</h1>
                <div className={styles.usersList}>
                    {
                        AllUsers.map((e) => {
                            return (
                                <Link to={`/home`} style={{ textDecoration: "none" }} key={e.user_id} onClick={() => SetDataToLocalStorage(e)}>
                                    <div className={styles.userData} >
                                        <img src={e.user_img} alt={e.user_name} className={styles.userPicture} />
                                        <p>{e.user_name} {e.user_lastname}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <button className={styles.ManageBtn}>Manage Profiles</button>
            </div>
        </div>
    )

}

