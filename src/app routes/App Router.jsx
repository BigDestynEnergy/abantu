import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../components/landing";
import LoginPage from "../components/auth/Login";
import CreatePage from "../components/auth/create";
import { useState } from "react";
import Home from "../components/Home";

export default function AppRouter(){
    const [user, setUser] = useState("");

    return(
        <BrowserRouter>
        <Routes>
            
            <Route path="/" element={<Landing/>}/>
            <Route path="/login" element={<LoginPage setUser={setUser}/>}/>
            <Route path="/create" element={<CreatePage setUser={setUser} />}/>
            <Route path="/home" element={<Home user={user} />}/>

        </Routes>
        </BrowserRouter>
    )
}