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

export default function LoginPage() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [yes, setYes] = useState(false)
    const [hide, setHide] = useState(false)
    const [note, setNote] = useState('')
   

   

    function handleNote(text){
        setNote(text)
        setTimeout(()=>{
            setNote('')
        }, 2000)
    }

    function handleSubmit(e) {

        e.preventDefault()

        if(email === '') handleNote('Please enter your email')
        else if(password === '') handleNote('Please enter your password')

        else{
            setYes(true)
             handleNote('Login successful...Please wait')

        setTimeout(()=>{
            navigate('/home')
        },2000)
        }
    }

    return(
        <div className="login-page">
            <form onSubmit={handleSubmit}>

                <h2 onClick={()=>navigate('/')}>
                    Abantu<span>verse</span>
                </h2>

                <h1>Welcome back</h1>
                <h4>Let's get you started</h4>

                {note ? (
                    <span style={yes ? green : red} className="note">
                        {note}
                    </span>
                ) : ''}

                <div className="inputs">

                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type={hide ? 'text' : 'password'}
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="show">
                        <input
                            type="checkbox"
                            onClick={()=>setHide(!hide)}
                        />
                        <span>
                            {hide ? 'Hide password' : 'Show password'}
                        </span>
                    </div>

                    <button type="submit">
                        Sign in
                    </button>

                    <div className="lower">
                        Don't have an account?{" "}
                        <span onClick={()=>navigate('/create')}>
                            Sign up
                        </span>
                    </div>

                </div>

            </form>
        </div>
    )
}