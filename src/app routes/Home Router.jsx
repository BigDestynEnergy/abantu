//Home Router.jsx
import { Outlet } from "react-router-dom";
import AppHeader from "../components/UI/AppHeader";

export default function HomeLayout({user, setSearch, setGenre}){

    return(
        <div className="homepage">
            <div className="side">
                <AppHeader user={user}
                setGenre={setGenre}
                setSearch={setSearch} />
                <Outlet user={user}/>
            </div>
        </div>
    )
}