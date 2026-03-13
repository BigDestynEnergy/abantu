import { useState} from "react"
import { useNavigate } from "react-router-dom"
import search from '../images/search.svg'
import close from '../images/close.svg'
import menuImg from '../images/menu.svg'
import filterCards from "../data/filter"

const menuCards = [
    {label: 'Profile', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
},{label: 'Logout', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>}
]



const navCards = [
       {label: 'Home'} ,
    {label: 'Reader'},
    {label: 'Downloads'},
    {label: 'Community'},
    {label: 'Settings'}
]

export default function AppHeader({user, setSearch,setGenre}){
    const [menu, setMenu] = useState(null)
    const navigate = useNavigate()
    const [find, setFind] = useState('')
    const [tabsOpen, setTabsOpen] = useState(false)
    const [activeFilter, setActiveFilter] = useState('All')

    function handleNavigation(label){
        if(label === 'Logout'){{navigate('/login'); setMenu}(false)}
        if(label === 'Profile'){navigate('/home/profile'); setMenu(false)}
            else return;
    }

    function navigateTabs(label){
        if(label === 'Home'){navigate('/home'); setTabsOpen(false) }
        if(label === 'Reader'){navigate('/home/reader');  setTabsOpen(false) }
        if(label === 'Downloads'){navigate('/home/downloads');  setTabsOpen(false) }
        if(label === 'Community'){navigate('/home/community');  setTabsOpen(false) }
        if(label === 'Settings'){navigate('/home/settings');  setTabsOpen(false) }
    }

 

    function getSearch(){
        setSearch(find)
    }
    return(
        <header className="App-header">
            <h1>A<span>V</span></h1>

            
                 {/* FILTER CHIPS*/}

                 <div className="tabs-n-filters">
                    <span>search by:</span>
                      <img src={tabsOpen ? close : menuImg} 
            title={tabsOpen ? 'Close Sidebar' : 'Open Sidebar'}
            className="menuSvg" onClick={()=>setTabsOpen(!tabsOpen)} />          
        
        {tabsOpen ? <div className="filter-cards">
        
         {filterCards.map((filter, index) => {
                return (
                <div
                    className={`fc ${activeFilter === filter.label ? "active" : ""}`}
                    key={index}
                    onClick={() => {
                        setActiveFilter(filter.label)
                        setGenre(filter.label === 'All' ? "" : filter.label)
}}
      >
        {filter.label}
      </div>
    )
  })}
</div> : ''}
</div>

             <div className="search">
                <input type="search"
                value={find}
                onChange={(e)=>{setFind(e.target.value);
                     setSearch(e.target.value)}}
                placeholder="search for comics here" />
                <img src={search} className="searchBtn"
                 onClick={()=> {getSearch(); setFind('')}} />
            </div>

             <div className="nav">
                {navCards.map((card, index) => {
                    return(
                        <div className="crd" onClick={()=>navigateTabs(card.label)} >
                            <div className="label" key={index}>{card.label}</div>
                        </div>
                    )
                })}
            </div>
            

            <div
            title="open profile"
            className="profile-card">
                <span>{user.name}</span>
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