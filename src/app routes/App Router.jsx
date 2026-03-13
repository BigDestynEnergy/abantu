//App Router.jsx

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "../components/landing"
import LoginPage from "../components/auth/Login"
import CreatePage from "../components/auth/create"
import { useEffect, useState } from "react"
import HomePage from "../components/pages/Home"
import DownloadsPage from '../components/pages/Downloads'
import HomeLayout from "./Home Router"
import SettingsPage from "../components/pages/Settings"
import ReaderPage from "../components/pages/Reader"
import CommunityPage from "../components/pages/Community"
import Profile from "../components/pages/profile"
import { supabase } from "../lib/supabaseClient"

export default function AppRouter(){

    const [user, setUser] = useState({name: '', email: ''})
    const [search, setSearch] = useState("")
    const [genre, setGenre] = useState("")
    const [library, setLibrary] = useState(() => {
        const saved = localStorage.getItem("library")
        return saved ? JSON.parse(saved) : [];
    }) //saving them liked comics bitch 😜

    useEffect(() => {

    async function getSession(){

        const { data } = await supabase.auth.getSession()

        const session = data.session

        if(session){

            const user = session.user

            setUser({
                name: user.user_metadata?.name || user.email.split("@")[0],
                email: user.email
            })

        }

    }

    getSession()

}, [])

useEffect(()=>{

    const { data: listener } = supabase.auth.onAuthStateChange(
        (event, session)=>{

            if(session){

                const user = session.user

                setUser({
                    name: user.user_metadata?.name || user.email.split("@")[0],
                    email: user.email
                })

            }else{

                setUser({name:'', email:''})

            }

        }
    )

    return () => {
        listener.subscription.unsubscribe()
    }

},[])

    useEffect(()=> {
        localStorage.setItem("library", JSON.stringify(library))
    }, [library])

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

                    <Route index element={<HomePage
                     search={search}
                     library={library}
                     setLibrary={setLibrary}
                      genre={genre}/>}/>
                    <Route path="downloads" element={ <DownloadsPage/> }/>
                    <Route path="settings" element={<SettingsPage/>}/>
                    <Route path="community" element={<CommunityPage />}/>
                    <Route path="reader" element={<ReaderPage library={library}/>}/>
                    <Route path="profile" element={<Profile
                     library={library} 
                     user={user}/>}/>
                </Route>

            </Routes>

        </BrowserRouter>
    )
}