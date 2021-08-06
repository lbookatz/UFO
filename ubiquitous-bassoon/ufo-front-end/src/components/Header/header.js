import Login from "../Login/login"
// import Logout from "../Login/logout"
import { useState, useEffect } from "react"; 

const Header = () => {

    return (
        <div>
            {/* <div>{user ? <Logout /> : <Login />}</div> */}
            <Login />

        <div className={"navigation"}>
            <a href=" /">Home</a>
            <a href="/events">Events</a>
            <a href="/locations">Locations</a>
            <a href="/logactivity">Log Activity</a>
        </div>
        </div>
    )
}

export default Header
