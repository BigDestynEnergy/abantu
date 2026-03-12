//App Router.jsx

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "../components/landing"
import LoginPage from "../components/auth/Login"
import CreatePage from "../components/auth/create"
import { useState } from "react"
import HomePage from "../components/pages/Home"
import DownloadsPage from '../components/pages/Downloads'
import HomeLayout from "./Home Router"
import SettingsPage from "../components/pages/Settings"
import ReaderPage from "../components/pages/Reader"
import CommunityPage from "../components/pages/Community"

export default function AppRouter(){

    const [user, setUser] = useState("")
    const [search, setSearch] = useState("")
    const [genre, setGenre] = useState("")

    return(
        <BrowserRouter>

            <Routes>

                {/* Public Pages */}
                <Route path="/" element={<Landing/>}/>
                <Route path="/login" element={<LoginPage setUser={setUser}/>}/>
                <Route path="/create" element={<CreatePage setUser={setUser}/>}/>

                {/* Layout Pages */}
                <Route path="/home" element={<HomeLayout 
                setGenre={setGenre}
                setSearch={setSearch}
                user={user}/>}>

                    <Route index element={<HomePage search={search} genre={genre}/>}/>
                    <Route path="downloads" element={ <DownloadsPage/> }/>
                    <Route path="settings" element={<SettingsPage/>}/>
                    <Route path="community" element={<CommunityPage />}/>
                    <Route path="reader" element={<ReaderPage/>}/>
                </Route>

            </Routes>

        </BrowserRouter>
    )
}