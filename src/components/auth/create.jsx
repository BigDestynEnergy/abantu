import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { supabase } from "../../lib/supabaseClient"

const red = {
  background: "#8f06065d",
  border: "1px solid red"
}

const green = {
  background: "#00571fb6",
  border: "1px solid #1db954"
}

export default function LoginPage({ setUser }) {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [hide, setHide] = useState(false)
  const [name, setName] = useState("")
  const [note, setNote] = useState("")
  const [yes, setYes] = useState(false)

  function handleNote(text) {
    setNote(text)
    setTimeout(() => {
      setNote("")
    }, 2000)
  }

  function passwordVerification() {
    if (!/[A-Z]/.test(password)) handleNote("Add an uppercase letter")
    else if (!/[a-z]/.test(password)) handleNote("Add a lowercase letter")
    else if (!/\d/.test(password)) handleNote("Add a number")
    else if (!/\W/.test(password)) handleNote("Add a symbol")
    else if (password.length < 8) handleNote("Must contain at least 8 characters")
    else {
  setYes(true)
      handleNote('Account created successfully')
      setUser(name)
       setTimeout(() => {
        navigate("/home")
       }, 2000);
    }
  }


  function handleSubmit(e) {
    e.preventDefault()

    if (name === "") handleNote("Please create username")
    else if (email === "") handleNote("Please enter your email")
    else if (password === "") handleNote("Please enter your password")
    else passwordVerification()
  }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>

        <h2 onClick={() => navigate("/")}>
          Abantu<span>verse</span>
        </h2>

        <h1>Welcome</h1>
        <h4>sign in to continue reading</h4>

        {note ? (
          <span style={yes ? green : red} className="note">
            {note}
          </span>
        ) : ""}

        <div className="inputs">

          <div className="input-group">
            <label>Display name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="example @Jane Doe 👤"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type={hide ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <div className="show">
            <input
              type="checkbox"
              onClick={() => setHide(!hide)}
            />
            <span>
              {hide ? "Hide password" : "Show password"}
            </span>
          </div>

          <button type="submit">
            create account
          </button>

          <div className="lower">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>
              Sign in
            </span>
          </div>

        </div>
      </form>
    </div>
  )
}