import { useState, useEffect } from "react"

export default function ReaderPage({ library, setLibrary }){
const [menu, setMenu] = useState(false)
const [contextMenu, setContextMenu] = useState(null)

 useEffect(() => {
    function handleWindowClick() {
      setContextMenu(null)
    }

    window.addEventListener("click", handleWindowClick)

    return () => window.removeEventListener("click", handleWindowClick)
  }, [])


function hoverDots(id){
    setMenu(id)
  }

  function closeDots(){
    setMenu(null)
  }

  function openContext(id){
  setContextMenu(prev => prev === id ? null : id)
} 

function toggleLibrary(comic){

  const exists = library.find(c => c.id === comic.id)

  if(exists){
    setLibrary(prev => prev.filter(c => c.id !== comic.id))
  } else {
    setLibrary(prev => [...prev, comic])
  }

}

    if(library.length === 0){
        return(
            <div className="reader-page">
                <h1>You are not currently reading anything</h1>
            </div>
        )
    }

    return(
        <div className="homepage">
          <div className="comic-cards">
              {library.map(comic => (
                <div key={comic.id}
                 onMouseOver={()=> hoverDots(comic.id)}
      onMouseLeave={()=> closeDots()}
                className="comic-card">
                   <div className="top">
                     {comic.logo}
                   </div>
                    <h3>{comic.label}</h3>
                    <span className="bottom">{comic.genre}</span>
                    {menu === comic.id &&(<span 
  className="dots"
  onClick={(e) => {
    e.stopPropagation()
    openContext(comic.id)
  }}
>
•••
</span>)}

{contextMenu === comic.id &&(
              <div className="context"
              onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => toggleLibrary(comic)}>
  {"Remove from library"}
</button>
                <button>Go to creator</button>
                <button>View Credits</button>
                <button>Share</button>
              </div>
            )}
                </div>
                
            ))}

            
          </div>
        </div>
    )
}