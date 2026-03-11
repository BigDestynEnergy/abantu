import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../components/landing";

export default function AppRouter(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}/>

        </Routes>
        </BrowserRouter>
    )
}