

export default function Profile({ user, library }) {



  return (
    <div className="profile-page">

      <div className="profile-header">
        <img src="https://i.pravatar.cc/150" className="avatar" />

        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p className="bio">Live a little</p>

          <button className="edit-btn">Edit Profile</button>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat">
          <h3>{library.length}</h3>
          <span>Comics Read</span>
        </div>

        <div className="stat">
          <h3>12</h3>
          <span>Downloads</span>
        </div>

        <div className="stat">
          <h3>8</h3>
          <span>Favorites</span>
        </div>
      </div>

      <div className="profile-library">
        <h3>Recently Read</h3>

        <div className="recent-grid">
          <div className="comic">Comic 1</div>
          <div className="comic">Comic 2</div>
          <div className="comic">Comic 3</div>
          <div className="comic">Comic 4</div>
        </div>
      </div>

    </div>
  )
}