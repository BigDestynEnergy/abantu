//Home Router.jsx
import { Outlet } from "react-router-dom";
import AppSidebar from "../components/UI/AppSidebar";
import AppHeader from "../components/UI/AppHeader";

export default function HomeLayout({user}){

    return(
        <div className="homepage">
            <AppSidebar />
            <div className="side">
                <AppHeader user={user} />
                <Outlet/>
            </div>
        </div>
    )
}