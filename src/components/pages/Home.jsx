import comics from './comics'

export default function HomePage({ search, genre }) {

  const filtered = comics.filter(comic => {

    const matchesSearch =
      comic.label.toLowerCase().includes(search.toLowerCase())

    const matchesGenre =
      genre ? comic.genre === genre : true

    return matchesSearch && matchesGenre
  })

  return (
    <div className="homepage">
      <div className="comic-cards">
        {filtered.map((cc) => (
          <div className="comic-card" key={cc.id}>
            <div className="top">{cc.logo}</div>

            <div className="bottom">
              <span>{cc.label}</span>
              <span className="genre">{cc.genre}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}