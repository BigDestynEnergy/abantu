//Home Router.jsx
import { Outlet } from "react-router-dom";
import AppHeader from "../components/UI/AppHeader";

export default function HomeLayout({user}){

    return(
        <div className="homepage">
            <div className="side">
                <AppHeader user={user} />
                <Outlet/>
            </div>
        </div>
    )
}