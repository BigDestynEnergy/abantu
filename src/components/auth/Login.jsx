import { useNavigate } from "react-router-dom"
import { useState } from "react"

const red = {
    background: '#8f06065d',
    border: '1px solid red'
}

const green = {
    background: '#00571fb6',
    border: '1px solid #1db954'
}

export default function LoginPage({setUser}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [yes, setYes] = useState(false)
    const [hide, setHide] = useState(false)
    const [note, setNote] = useState('')
    const [trails, setTrials] = useState(3)

    const username = email.split('@')[0]

    function handleNote(text){
        setNote(text)
        setTimeout(()=>{
            setNote('')
        }, 2000)
    }

    function handleSubmit(e) {
        e.preventDefault();
        // const data = { email, password }
        //learn backend batile iwe

        if(email === '')handleNote('Please enter your email');
        else if(password === '')handleNote('Please enter your password');
        else if(trails === 0) {handleNote('System locked!');
            setTimeout(()=>{
                
                 navigate('/')

            }, 2000)
        }
        else if(password.length < 8){setTrials(trails - 1), handleNote(`Invalid password! (${trails} ${trails === 1 ? 'Trial' : 'Trails'} left)`)}
        else{
            setYes(true)
            setUser(username)
            handleNote('Login successful...Please wait')
            setTimeout(()=>{
                navigate('/home')
            }, 2000)
        }

}
const navigate = useNavigate()
    return(
        <div className="login-page">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <h2 onClick={()=>navigate('/')}>Abantu<span>verse</span></h2>

                <h1>Welcome back</h1>
                <h4>Let's get you started</h4>
               {note ?  <span style={yes ? green : red} className="note">{note}</span> : ''}
                <div className="inputs">
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="you@example.com" />
                    </div>

                        <div className="input-group">
                        <label>Password</label>
                        <input type={hide ? 'text' : 'password'}
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                         placeholder="••••••••" />
                    </div>

                    <div className="show">
                        <input type="checkbox" onClick={()=>{setHide(!hide)}} />
                        <span>{hide ? 'Hide password' : 'Show password'}</span>
                    </div>

                    <button>Sign in</button>

                    <div className="lower">
                        Don't have an account? <span onClick={()=>navigate('/create')}>Sign up</span>
                    </div>
                </div>
            </form>
        </div>
    )
}