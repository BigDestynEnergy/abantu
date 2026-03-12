import { useState, useEffect } from 'react'
import comics from './comics'

export default function HomePage({ search, genre, library, setLibrary }) {
  const [menu, setMenu] = useState(null)
  const [contextMenu, setContextMenu] = useState(null)
    useEffect(() => {
    function handleWindowClick() {
      setContextMenu(null)
    }

    window.addEventListener("click", handleWindowClick)

    return () => window.removeEventListener("click", handleWindowClick)
  }, [])

function toggleLibrary(comic){

  const exists = library.find(c => c.id === comic.id)

  if(exists){
    setLibrary(prev => prev.filter(c => c.id !== comic.id))
  } else {
    setLibrary(prev => [...prev, comic])
  }

}


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
      {filtered.map((cc) => {

  const liked = library.some(c => c.id === cc.id)

  return(
    <div className="comic-card"
      onMouseOver={()=> hoverDots(cc.id)}
      onMouseLeave={()=> closeDots()}
      key={cc.id}
    >
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
                <button onClick={() => toggleLibrary(cc)}>
  {liked ? "Remove from library" : "Add to library"}
</button>
                <button>Go to creator</button>
                <button>View Credits</button>
                <button>Share</button>
              </div>
            )}
          </div>
          
        )
        } )
        }
        
      </div>
      
    </div>
  )
}