import { useState, useEffect } from 'react'
import comics from './comics'

export default function HomePage({ search, genre }) {
  const [menu, setMenu] = useState(null)
  const [contextMenu, setContextMenu] = useState(null)
    useEffect(() => {
    function handleWindowClick() {
      setContextMenu(null)
    }

    window.addEventListener("click", handleWindowClick)

    return () => window.removeEventListener("click", handleWindowClick)
  }, [])

  const filtered = comics.filter(comic => {

    const matchesSearch =
      comic.label.toLowerCase().includes(search.toLowerCase())

    const matchesGenre =
      genre ? comic.genre === genre : true

    return matchesSearch && matchesGenre
  })

  function hoverDots(id){
    setMenu(id)
  }

  function closeDots(){
    setMenu(null)
  }

  function openContext(id){
  setContextMenu(prev => prev === id ? null : id)
}
  

  return (
    <div className="homepage">
      <div className="comic-cards">
        {filtered.map((cc) => (
          <div className="comic-card"
          onMouseOver={()=> hoverDots(cc.id)}
          onMouseLeave={()=> closeDots()}
          key={cc.id}>
            <div className="top">{cc.logo}</div>

            <div className="bottom">
              <span>{cc.label}</span>
              <span className="genre">{cc.genre}</span>
            </div>
            {menu === cc.id &&(<span 
  className="dots"
  onClick={(e) => {
    e.stopPropagation()
    openContext(cc.id)
  }}
>
•••
</span>)}
            {contextMenu === cc.id &&(
              <div className="context"
              onClick={(e) => e.stopPropagation()}
              >
                <button>Add to library</button>
                <button>Go to creator</button>
                <button>View Credits</button>
                <button>Share</button>
              </div>
            )}
          </div>
          
        ) )
        }
        
      </div>
      
    </div>
  )
}