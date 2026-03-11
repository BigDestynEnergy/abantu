import { useNavigate } from "react-router-dom"

const cards = [
    {label: 'Vast Library', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>,
        info: 'Explore hundreds of Malawian comics and graphic novels'
    },

    {label: 'Broad Reach', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>,
        info: 'Pick up right where you left off, on any device'
    },

    {label: 'Downloads', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>,
        info: 'Save comics for offline reading, anytime, anywhere across platforms'
    }
]

export default function Landing(){
    const navigate = useNavigate()
    return(
        <div className="landing">
            <header>
                <h2>Abantu<span>verse</span></h2>

                <div className="auth">
                    <button className="loginBtn" onClick={()=>navigate('/login')}>sign in</button>
                    <button className="accent" onClick={()=>navigate('/create')}>create account</button>
                </div>
            </header>

            <div className="hero">
                <h1>Read Comics on</h1>
                <h2>Abantuverse</h2>
                <span className="hero-description" onClick={()=>navigate('/login')}>Discover and read Malawian comics and graphic novels.</span>
                <span className="hero-description" onClick={()=>navigate('/login')}>Your next favorite story is waiting</span>

                <div className="cta">
                    <button className="accent" >start reading for free</button>
                    <button className="cta-browse">Browse Library</button>
                </div>

                <div className="description">
                    <h2>Why choose Abantuverse?</h2>
                    <div className="hero-description-cards">
                                            {cards.map((card, index) => {

                        return(
                            <div className="hero-card" key={index}>
                                {card.icon}
                                <h5>{card.label}</h5>
                                <span>{card.info}</span>
                            </div>
                        )
                    })}
                    </div>
                </div>

                
            </div>
            <footer>
                    <div className="left">
                    <h5>Abantuverse
                    copyright © 2025</h5>
                    </div>

                    <div className="right">
                        <h5>privacy policy</h5>
                    </div>
                </footer>
        </div>
    )
}