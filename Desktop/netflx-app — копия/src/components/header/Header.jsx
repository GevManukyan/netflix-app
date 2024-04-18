
import React, { useEffect, useState,memo } from "react"
import { Link } from "react-router-dom"
import "./header.css"
import { getUser } from "./header.helper"
import BurgerMenu from "./burger/burger"
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import UserSettings from "./userInfo/userInfo"
import Usernotifications from "./notificationsFile/notification"

const Header = () => {

    const [searchInput, setSearchInput] = useState(false)
    const [headerStyle, setHeaderStyle] = useState(false)
    const user = getUser()
    useEffect(() => {
        window.addEventListener("scroll", function () { this.scrollY > 0 ? setHeaderStyle(true) : setHeaderStyle(false) })
    }, [])
    const openInput = () => setSearchInput(!searchInput)
    const closeAll = () => setSearchInput(false)


    return (
        <div className={headerStyle ? "header scroled" : "header"}>
            <div className="burger">
                <BurgerMenu />
            </div>
            <div className="menuList">
                <img src="/media/images/Logonetflix.png" alt="" className="logo" />
                <div className="menu">
                    <Link to="" className="link" >Home</Link>
                    <Link to="" className="link">TV Shows</Link>
                    <Link to="" className="link">Latest</Link>
                    <Link to="" className="link">My List</Link>
                    <Link to="" className="link">Browse by Language</Link>
                </div>
            </div>
            <div className="toolsMenu">
                <div>
                    <input type="text"  className={searchInput ? "inputIsOpened" : "inputIsClosed"} onBlur={() => closeAll()} placeholder="Search..." />
                    <p onClick={() => openInput()} style={{ cursor: "pointer" }} className={searchInput ? "searchIconMove" : "searchIconDontMove"}>
                        <CiSearch size={"30px"} />
                    </p>
                </div>
                <div className="userNotification">
                    <IoIosNotificationsOutline size={"30px"} />
                    <div className="notification">
                        <Usernotifications />
                    </div>
                </div>
                <div className="userSettings">
                    <img src={user.user_img} alt="" style={{ width: "40px" }} className="userImage"/>
                    <div className="settings">
                        <UserSettings />
                    </div>
                </div>
            </div>


        </div>
    )

}
export default memo(Header)