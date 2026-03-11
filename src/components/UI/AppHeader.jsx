import { useState } from "react"
import { useNavigate } from "react-router-dom"

const menuCards = [
    {label: 'Profile', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
},{label: 'Logout', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>}
]

export default function AppHeader({user}){
    const [menu, setMenu] = useState(false)
    const navigate = useNavigate()

    function handleNavigation(label){
        if(label === 'Logout'){navigate('/login'); setMenu(false)}
            else return;
    }
    return(
        <header className="App-header">
            <span></span>
            <h1>Home</h1>

            <div
            title="open profile"
            className="profile-card">
                <span>{user}</span>
                <svg
                onClick={()=>{setMenu(!menu)}}
                xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>

            {menu &&(
                <div className="menu">
                     <h4>Menu</h4>
                    {menuCards.map((menuCard, index) => {

                        return(
                            <div className="menu-card"
                            onClick={()=>handleNavigation(menuCard.label)}
                            key={index}>
                               
                                <span>{menuCard.icon}</span>
                                <span>{menuCard.label}</span>
                            </div>
                        )
                    })}
                </div>
            )}
        </header>
    )
}