import { useNavigate } from "react-router-dom"
import { useState } from "react"
export default function SettingsPage(){

    const navigate = useNavigate()

  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true
  })

  function toggleSetting(name){
    setSettings(prev => ({
      ...prev,
      [name]: !prev[name]
    }))
  }

  function logout(){
    navigate("/login")
  }

  return(
    <div className="settings-page">

      <h2>Settings</h2>

      <div className="settings-section">

        <h3>Appearance</h3>

        <div className="setting">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={settings.darkMode}
            onChange={()=>toggleSetting("darkMode")}
          />
        </div>

      </div>

      <div className="settings-section">

        <h3>Notifications</h3>

        <div className="setting">
          <span>Enable Notifications</span>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={()=>toggleSetting("notifications")}
          />
        </div>

      </div>

      <div className="settings-section">

        <h3>Account</h3>

        <button className="password-btn">
          Change Password
        </button>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

      </div>

    </div>)
}